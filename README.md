# FCORP

###To compile Test app from source:

1. You must download this project to your machine using the command:
   git clone https://github.com/trongbao123/FCORP.git

2. To use the local api server, you need to download these files, if you already have one, skip this step:

- [Dowload elasticsearch]: (https://www.elastic.co/fr/downloads/past-releases/elasticsearch-7-0-0)
- [Dowload Kibana]: (https://www.elastic.co/fr/downloads/past-releases/kibana-7-0-0)
- [Dowload java]: (https://www.oracle.com/java/technologies/downloads/)

  3. After downloading the above 3 files, proceed to extract them.
  4. After successfully extracting the files, click on the elasticsearch file to run these are the steps to start elasticsearch:

` Click on the Elasticsearch folder you just unzipped, find the file -> Elasticsearch-7.0.0 -> bin ->click->elasticsearch.batch-> wait for about 2-3 minutes to start.`

- After completing the installation process you can go to your browser to check by entering:
  > http://localhost:9200/
- The browser returns you a json string with information like this that you have successfully installed and started Elasticsearch:

```json
{
  "name": "ADMIN",
  "cluster_name": "elasticsearch",
  "cluster_uuid": "lY6rxH9MRE2eHxN00Qel9Q",
  "version": {
    "number": "7.0.0",
    "build_flavor": "default",
    "build_type": "zip",
    "build_hash": "b7e28a7",
    "build_date": "2019-04-05T22:55:32.697037Z",
    "build_snapshot": false,
    "lucene_version": "8.0.0",
    "minimum_wire_compatibility_version": "6.7.0",
    "minimum_index_compatibility_version": "6.0.0-beta1"
  },
  "tagline": "You Know, for Search"
}
```

5. Run Server

- Step 1: Open terminal at the directory you just cloned the project and type cmd:
  > cd Test-FCORB.
- Step 2: At the Test-FCORB folder you download nnode_modules by typing the command:
  > npm install.
- Step 3:After downloading node_modules, enter the start command to run the server:
  > npm start.

* Step 4: Once you've started it, you can check it out in your browser by typing:

  > http://localhost:3000/books

  6. Run Vue.js

- Step 1: Open terminal at the directory you just cloned the project and type cmd:
  > cd my-project.
- Step 2: At the my-project folder you download nnode_modules by typing the command:
  > yarn install.

* Step 3:After downloading node_modules, enter the start command to run the server:

  > yarn serve

* Step 4: Once you've started it, you can check it out in your browser by typing:
  > http://localhost:8080/
