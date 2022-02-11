import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommand, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const dynamoDbRegion = "us-west-1";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const getDynamoDBClient = () => {

    const options:DynamoDBClientConfig = {
        region: dynamoDbRegion,
        credentials: {
            accessKeyId: 'AKIAXZD4GVVDJ54AJGVD',
            secretAccessKey: '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'
        }
    };

    const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
        ? new DynamoDBClient({
            ...options,
            endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
        })
        : new DynamoDBClient(options);

    return DynamoDBDocument.from(client);
};

module.exports = {
    readEntries: async (year) => {
        const { Items } = await getDynamoDBClient()
            .send(new ScanCommand({
                TableName: "SuperBowlEntries",
                FilterExpression: "yearKey = :y",
                ExpressionAttributeValues: {
                    ":y": year
                }
            }));

        return Items;
    },
    getEntry: async entryId => {
        const entry = await getDynamoDBClient()
            .send(new GetCommand({
                TableName: "SuperBowlEntries",
                Key: {
                    id: entryId
                }
            }));

        return entry;
    },
    updateEntry: async (entryId, entry) => {
        const client = getDynamoDBClient();

        await client.send(new UpdateCommand({
            TableName: "SuperBowlEntries",
            Key: {
                id: entryId
            },
            UpdateExpression: "set entry = :e",
            ExpressionAttributeValues:{
                ":e": entry
            }
        }));
    },
    createEntry: async entry => {
        await getDynamoDBClient().send(new PutCommand({
                TableName: "SuperBowlEntries",
                Item: {
                    id: Date.now(),
                    yearKey: 2022,
                    entry
                }
            }));
    },
    createWinningEntry: async (entry, year) => {
        const client = getDynamoDBClient();

        await client.update({
            TableName: "WinningEntry",
            Key: {
                id: String(year - 2019)
            },
            UpdateExpression: "set entry = :e",
            ExpressionAttributeValues:{
                ":e": entry
            }
        });
    },
    getWinningEntry: async (year) => {
        console.log(year)
        const { Item } = await getDynamoDBClient()
            .get({
                TableName: "WinningEntry",
                Key: {
                    id: String(year - 2019)
                }
            });

        return Item;
    }
};