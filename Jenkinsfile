pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'echo Build logic goes here'
            }
        }

        stage('Test') {
            steps {
                echo 'Running unit tests...'
                sh 'echo Test logic goes here'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to staging...'
                sh 'echo Deploy logic goes here'
            }
        }
    }
}
