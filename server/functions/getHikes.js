import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

import  dynamoDb  from "../const/providers.js";
const myDynamoDb = dynamoDb
const docClient = DynamoDBDocumentClient.from(myDynamoDb);


const getHikes = async () => {
  const command = new ScanCommand({
    TableName: "HikeTable",
  });

  const response = await docClient.send(command);
  console.log(response)

  return {
    statusCode: 200,
    body: response.Items
  }

}



export default getHikes