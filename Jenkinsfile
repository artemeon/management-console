#!groovy
@Library('art-shared@master') _



pipeline {
    agent {
        node {
            label 'php 7.3'

            //docker {
            //    image 'node:6-alpine'
            //}
        }

    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }

    }
}
