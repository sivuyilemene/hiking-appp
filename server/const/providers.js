
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";


const dynamoDb = new DynamoDBClient({region: 'us-east-1'});


export default dynamoDb