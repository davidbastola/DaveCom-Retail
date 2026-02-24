pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building DaveCom-Retail application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Simulating Docker image build...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment simulation complete.'
            }
        }
    }
}
