pipeline {
    agent any

    environment {
        IMAGE_NAME = "tamilnadu-tourism"
        CONTAINER_NAME = "tamilnadu-tourism-container"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching Source Code'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8080:80 ${IMAGE_NAME}"
                }
            }
        }

        stage('Test Website') {
            steps {
                sh "curl http://localhost:8080"
            }
        }
    }

    post {

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }

        always {
            echo 'Pipeline Completed'
        }
    }
}