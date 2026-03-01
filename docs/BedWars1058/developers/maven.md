---
sidebar_label: Maven
title: Maven
sidebar_position: 5.2
---
[![Version](https://img.shields.io/spiget/version/50942)](https://www.spigotmc.org/resources/50942)

##### Repository

###### Maven
```xml
<repositories>
  <repository>
    <id>andrei1058-repo</id>
    <url>https://repo.andrei1058.dev/releases/</url>
  </repository>
</repositories>
```

###### Gradle
```groovy
repositories {
    maven { url 'https://repo.andrei1058.dev/releases/' }
}
```

##### Dependency

###### Maven
```xml
<!--BedWars1058 API-->
<dependency>
  <groupId>com.andrei1058.bedwars</groupId>
  <artifactId>bedwars-api</artifactId>
  <version>LATEST-VERSION</version>
  <scope>provided</scope>
</dependency>
```

###### Gradle
```groovy
dependencies {
    compileOnly 'com.andrei1058.bedwars:bedwars-api:LATEST-VERSION'
}
```
