## 1️⃣ Java базалык образ
#FROM openjdk:17-jdk-slim
#
## 2️⃣ Контейнер ичиндеги жумушчу каталог
#WORKDIR /backend
#
## 3️⃣ JAR файлыңды көчүрүү (target ичиндеги)
#COPY target/*.jar app.jar
#
## 4️⃣ Контейнер кайсы портту угат
#EXPOSE 8080
#
## 5️⃣ Контейнер иштегенде аткарыла турган буйрук
#ENTRYPOINT ["java", "-jar", "app.jar"]


# Java 17 базалык образ
FROM openjdk:17-jdk-slim

# Жумушчу каталог
WORKDIR /app

# JAR файлын көчүрүү
COPY target/*.jar app.jar

# Порт
EXPOSE 8080

# Иштетүү буйругу
ENTRYPOINT ["java", "-jar", "app.jar"]
