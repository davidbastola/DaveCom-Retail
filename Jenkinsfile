stage('Docker Build') {
    steps {
        script {
            echo 'Building Docker image...'
            sh 'docker build -t davecom-retail:latest .'
            echo 'Running Docker container...'
            sh 'docker run -d -p 3000:3000 --name davecom-retail davecom-retail:latest'
        }
    }
}
