FROM xuntian/npl-runtime:latest
MAINTAINER xuntian "li.zq@foxmail.com"

ADD ./ /root/logsystem/

WORKDIR /root/logsystem/

CMD chmod +x startup.sh

ENTRYPOINT [./startup.sh]