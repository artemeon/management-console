#!groovy
@Library('art-shared@master') _



pipeline {
    agent {
        node {
            label 'php 7.2'

            #docker {
            #    image 'node:6-alpine'
            #}
        }

    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm build'
            }
        }
    }
}
