replace .env.example to .env pay attention on .env comments  

if already installed docker and docker-compose 

docker-compose up -d

docker-compose exec mentorly npx prisma migrate deploy

docker-compose exec mentorly npx prisma db seed

or run app locally with standard commands

