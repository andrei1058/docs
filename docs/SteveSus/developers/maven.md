---
title: Maven Repo
sidebar_position: 1
---

### Repository

#### Maven
```xml
<repositories>
    <repository>
        <id>andrei1058-repo</id>
        <url>https://repo.andrei1058.dev/repository/maven-public/</url>
    </repository>
</repositories>
```

#### Gradle
```groovy
repositories {
    maven { url 'https://repo.andrei1058.dev/repository/maven-public/' }
}
```

### Dependency

#### Maven
```xml
<dependency>
    <groupId>com.andrei1058.stevesus</groupId>
    <artifactId>stevesus-api</artifactId>
    <version>VERSION</version>
    <scope>provided</scope>
</dependency>
```

#### Gradle
```groovy
dependencies {
    compileOnly 'com.andrei1058.stevesus:stevesus-api:VERSION'
}
```

### Other Dependencies
SteveSus also uses the Database API:

#### Maven
```xml
<dependency>
    <groupId>com.andrei1058.dbi</groupId>
    <artifactId>DataBaseInterface</artifactId>
    <version>[0.1-SNAPSHOT,)</version>
    <scope>provided</scope>
</dependency>
```

#### Gradle
```groovy
dependencies {
    compileOnly 'com.andrei1058.dbi:DataBaseInterface:[0.1-SNAPSHOT,)'
}
```
