const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqp_a0b1fa7136a7fcba6d0b415b3ba7d5d7f1e826f0',
    options: {
      'sonar.projectKey': 'expressApp',
      'sonar.projectName': 'expressApp',
      'sonar.sources': '.'
    }
  },
  () => process.exit()
)
