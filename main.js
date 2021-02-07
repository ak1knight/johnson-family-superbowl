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
            FilterExpression: "#yr = :yyyy",
            ExpressionAttributeNames:{
                "#yr": "yearKey"
            },
            ExpressionAttributeValues: {
                ":yyyy": 2021
            }
        };
        tableContents = await scanDB(params);
    }catch(err){
        console.log(err);
        return err;
    }
    let calls = [];
    tableContents.reduce((acc, v, i, arr) => arr.findIndex(e => v.entry.name === e.entry.name) !== i && acc.findIndex(e => v.entry.name === e.entry.name) === -1 ? acc.concat(v) : acc, []).forEach(function(value){
        // let params = {
        //     Key: {
        //         "id": value.id
        //     },
        //     TableName: `SuperBowlEntries`,
        // };
        // calls.push(dynamoDb.delete(params).promise());
        console.log(`${value.yearKey} ${value.entry.name}`)
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