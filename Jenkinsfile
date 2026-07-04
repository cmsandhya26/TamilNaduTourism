pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching Source Code'
                git 'https://github.com/cmsandhya26/TamilNaduTourism.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t tamilnadu-tourism .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f tamilnadu-tourism-container'
                bat 'docker run -d --name tamilnadu-tourism-container -p 8082:80 tamilnadu-tourism'
            }
        }

        stage('Test Website') {
            steps {
                bat 'curl http://localhost:8082'
            }
        }
    }

    post {
        always {
            echo 'Pipeline Completed'
        }
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}