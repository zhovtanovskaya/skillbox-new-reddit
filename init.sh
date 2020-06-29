# Начать проект в текущей дирректории.
#

# Создать папку для проекта.
PROJECT_DIR='./Skillbox/new-reddit/'
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR
# Инициализировать репозиторий.
git init .
# Установить nvm. По инструкции с 
# https://github.com/nvm-sh/nvm
# v0.35.3
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
. ~/.bash_profile
# Установить node (LTS). И использовать эту
# версию глобально.
nvm install 12.18.0
nvm use 12.18.0