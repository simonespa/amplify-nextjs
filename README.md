# AmplifyNext
This is a Next.js integration with AWS Amplify.
## Deploy the app on CloudFormation

```
aws cloudformation deploy --template-file ./infrastructure/role.yaml --stack-name AmplifyNext-Role --capabilities CAPABILITY_NAMED_IAM
```

```
aws cloudformation deploy --template-file ./infrastructure/amplify.yaml --stack-name AmplifyNext-App --capabilities CAPABILITY_IAM --parameter-overrides GitHubOauthToken=$GITHUB_ACCESS_TOKEN
```

## Issues
- Missing rollback:
  - https://github.com/aws-amplify/amplify-cli/issues/1484
  - https://github.com/aws-amplify/amplify-console/issues/542
- When the CI/CD fails in one of the steps the logs are not clear
