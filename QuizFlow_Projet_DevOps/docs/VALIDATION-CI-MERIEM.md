# Validation CI/CD - Meriem

## Projet
QuizFlow - Application Web de Quiz Interactif

## Objectif
Tester le declenchement automatique du pipeline QuizFlow-Dev apres une Pull Request fusionnee dans dev.

## Contribution de Meriem
Documentation de la validation du build, des tests et de Docker.

## Verifications attendues
- Recuperation du code depuis GitHub
- Execution des tests unitaires
- Builds paralleles avec Node.js 20 et Node.js 22
- Construction de l'image Docker
- Execution des Smoke Tests
- Archivage des artefacts Jenkins

## Resultat attendu
Jenkins detecte la modification sur dev avec Poll SCM et execute le pipeline automatiquement.

Responsable : Meriem
