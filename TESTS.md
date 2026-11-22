# Documentation des tests — QuizFlow

## Objectif
Vérifier automatiquement le bon fonctionnement de l'application QuizFlow dans le cadre du projet DevOps.

## Types de tests
- Tests unitaires : vérification des fonctions du quiz.
- Smoke tests : vérification du démarrage et de l'accessibilité de l'application.
- Tests CI : exécution automatique par Jenkins.

## Exécution locale
Depuis le dossier contenant `package.json`, lancer :

    npm.cmd test

## Intégration continue
Les tests doivent être exécutés dans les pipelines Jenkins lors des Pull Requests et des Push sur `dev`.

## Vérification des résultats
- PASSED : les tests ont réussi.
- FAILED : au moins un test ou une étape a échoué.

## Responsable
Meriem — Équipe QuizFlow.
