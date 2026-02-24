pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/davidbastola/DaveCom-Retail.git'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh 'docker build -t shoppingcart-demo:latest .'
                }
            }
        }

        stage('Docker Run') {
            steps {
                script {
                    echo 'Running Docker container...'
                    sh 'docker run -d -p 3000:3000 --name shoppingcart-demo shoppingcart-demo:latest'
                }
            }
        }
    }
}
