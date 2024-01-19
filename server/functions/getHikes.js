import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const dynamoDB = new DynamoDBClient ({
    region: "REGION",
    credentials: {
        accessKeyId: "ACCESSKEY",
        secretAccessKey: "SECRETACCESSKEY",
    },

});
const docClient = DynamoDBDocumentClient.from(dynamoDB);


const getHikes = async () => {
  const command = new ScanCommand({
    TableName: "TestTable",
  });

  const response = await docClient.send(command);
  console.log(response)

  return {
    statusCode: 200,
    body: response.Items
  }

}



export default getHikes