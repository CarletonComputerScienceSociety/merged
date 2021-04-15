# API

create v-env
    virtualenv venv -p python3
activate v-env
    source venv/bin/activate
deactivate
    deactivate
get requirements
    python -m pip freeze
    
python manage.py runserver