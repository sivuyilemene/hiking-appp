import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const REGION = "";
const ACCESSKEYID = "";
const SECRETACCESSKEY = ""; 

const dynamoDB = new DynamoDBClient ({
    region: REGION,
    credentials: {
        accessKeyId: ACCESSKEYID,
        secretAccessKey: SECRETACCESSKEY,
    },

});
const docClient = DynamoDBDocumentClient.from(dynamoDB);


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