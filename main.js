const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region:'us-west-1'
});

async function main(event, context) {
    let tableContents;
    try{
        //get items from dynamo
        const params = {
            TableName: `SuperBowlEntries`,
        };
        tableContents = await scanDB(params);
    }catch(err){
        console.log(err);
        return err;
    }
    let calls = [];
    tableContents.forEach(function(value){
        let params = {
            ExpressionAttributeValues: {
                ":y": 2020,
            },
            Key: {
                "id": value.id
            },
            TableName: `SuperBowlEntries`,
            UpdateExpression: "SET yearKey = :y",
            };
        calls.push(dynamoDb.update(params).promise());
    });
    let response;
    try{
        response = await Promise.all(calls);
    }catch(err){
        console.log(err);
    }
    return response;
}
async function scanDB(params) {
    let dynamoContents = [];
    let items;
    do{
        items =  await dynamoDb.scan(params).promise();
        items.Items.forEach((item) => dynamoContents.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey != "undefined");
    return dynamoContents;
};
main();