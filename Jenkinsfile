pipeline {
  agent {
    label 'Slave_Induccion'
  }

  stages {

    stage ('checkout') {
      steps {
        checkout scm
      }
    }

    stage('NPM Install') {
      steps {
        echo '------------>Installing<------------'
        sh 'npm install'
      }
    }

    stage('Unit Test') {
      steps {
        echo '------------>Testing<------------'
        sh 'npm run test -- --watch=false --browsers ChromeHeadless'
      }
    }
    
  }
}
