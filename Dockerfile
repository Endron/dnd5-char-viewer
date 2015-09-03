FROM java:8
EXPOSE 8080

CMD ["java", "-jar", "app.jar"]

ADD build/libs/*.jar app.jar
