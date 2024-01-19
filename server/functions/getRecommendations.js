import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const dynamoDB = new DynamoDBClient ({
    region: "REGION",
    credentials: {
        accessKeyId: "ACCESSKEY",
        secretAccessKey: "SECRETACCESSKEY",
    },

});
const docClient = DynamoDBDocumentClient.from(dynamoDB);


const getRecommendations = async (params) => {


  const command = new QueryCommand({
    TableName: "TestTable",
    ProjectionExpression: "Location, Trail, Rating",
    KeyConditionExpression: "Location = :location, Rating = :rating",
    ExpressionAttributeValues: {
        ":location": {S: params.Location},
        ":rating": {N: params.Rating}
    },
    FilterExpression: "Location = :location AND Rating => :rating",
  });

  

  const response = await docClient.send(command);
  console.log(response)

  return {
    statusCode: 200,
    body: response.Items
  }

}



export default getRecommendations