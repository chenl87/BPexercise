# BigPanda DevOps Exercise

This Github project contains:

1. The code for both panda-service and big-service.
2. Ansible roles which takes care of provisioning both services.
3. Modified panda.yml which installs ONLY the newly written service on the base VM.


The panda.yml contains the configuration for the panda-service.
To deploy the big-service replace the content of panda.yml with the big.yml content.

Notes
=====

- If the code has changed after any of the service was provisioned, the ansible playbook run will redeploy the service in its latest version and rerun the service.
- Both NodeJS services are activated and monitored by the "forever" tool. If the service crashes, forever will rerun it. (Reference: https://www.npmjs.com/package/forever)
