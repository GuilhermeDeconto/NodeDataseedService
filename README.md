# NodeDataseedService

In order to use Node Dataseed service  with zuul and eureka service discovery, run the following applications:
* [Eureka Service Discovery](https://github.com/GuilhermeDeconto/ServiceDiscovery)
* [Zuul Gateway](https://github.com/GuilhermeDeconto/Gateway)
* [Eureka Client](https://github.com/GuilhermeDeconto/NodeDataseedService)

In addition you'll need the following commands to see everything working:
* [Check eureka registration](http://localhost:8761/)
* [Check if zuul has client serive route](http://localhost:8762/actuator/routes)
* [Call service through zuul](http://localhost:8762/spring-cloud-eureka-client/api/test)
