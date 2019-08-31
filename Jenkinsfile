#!groovy
@Library('art-shared@master') _



pipeline {
    agent {
//         node {
//             label 'php 7.3'
//         }

        docker {
           image 'node:6-alpine'
           label 'master'
//            args '-v /.npm/''
        }

    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install --unsafe-perm=true --allow-root'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build '
            }
        }

        stage('Artifacts') {
            steps {
                sh 'tar -czf dist.tar.gz ./dist'
                stash 'dist.tar.gz'
                archiveArtifacts artifacts: 'dist.tar.gz'
          }
        }
    }
}
