stage('SonarQube Analysis') {
    steps {
        script {
            sh """
            sonar-scanner \
            -Dsonar.projectKey=DaveCom-Retail \
            -Dsonar.sources=src/backend \
            -Dsonar.host.url=http://localhost:9000 \
            -Dsonar.login=YOUR_SONAR_TOKEN
            """
        }
    }
}
