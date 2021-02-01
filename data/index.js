const getDynamoDBClient = () => {
    const AWS = require("aws-sdk");

    const dynamoDbRegion = "us-west-1";

    const options = {
        convertEmptyValues: true,
        region: dynamoDbRegion
    };

    const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
        ? new AWS.DynamoDB.DocumentClient({
            ...options,
            endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
        })
        : new AWS.DynamoDB.DocumentClient(options);

    return client;
};

module.exports = {
    readEntries: async (year) => {
        const { Items } = await getDynamoDBClient()
            .scan({
                TableName: "SuperBowlEntries",
                FilterExpression: "yearKey = :y",
                ExpressionAttributeValues: {
                    ":y": year
                }
            })
            .promise();

        return Items;
    },
    getEntry: async entryId => {
        const { Items } = await getDynamoDBClient()
            .scan({
                TableName: "SuperBowlEntries",
                Key: {
                    "id": entryId
                }
            })
            .promise();

        //const entry = Items.find(entry => entry.id == entryId);

        return entry;
    },
    updateEntry: async (entryId, entry) => {
        const client = getDynamoDBClient();

        await client.update({
            TableName: "SuperBowlEntries",
            Key: {
                id: entryId
            },
            UpdateExpression: "set entry = :e",
            ExpressionAttributeValues:{
                ":e": entry
            }
        }).promise();
    },
    createEntry: async entry => {
        await getDynamoDBClient()
            .put({
                TableName: "SuperBowlEntries",
                Item: {
                    id: Date.now(),
                    entry
                }
            })
            .promise();
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
        }).promise();
    },
    getWinningEntry: async (year) => {
        console.log(year)
        const { Item } = await getDynamoDBClient()
            .get({
                TableName: "WinningEntry",
                Key: {
                    id: String(year - 2019)
                }
            }).promise();

        return Item;
    }
};