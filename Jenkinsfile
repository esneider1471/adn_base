pipeline{
   agent {
    label 'Slave_Induccion'
  }

  stages{
      stage('Clean Workspace'){
    cleanWs()
  }
    stage ('checkout'){
      steps{
        checkout scm
      }
    }

    stage('NPM Install') {
      steps {
        echo "------------>Installing<------------"
        sh 'npm install'
      }
    }

    stage('Unit Test') {
      steps {
        echo "------------>Testing<------------"
        sh 'npm run test'
      }
    }
    stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
        sh 'npm run e2e'
      }
    }
  }
}
