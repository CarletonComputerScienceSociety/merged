# Community Project

## Backend Setup

### Docker Setup

Everything in this application is preconfigured to use host names from our docker-compose.yml.

```bash
docker-compose up
```

### Non-Docker Setup

Do the following setup in the ```api``` directory.

### 1. Create virtual environment

```bash
virtualenv venv -p python3
```

### 2. Activate virtual environment

```bash
source venv/bin/activate
```

You will also need to know how to deactivate your virtual environment later, which can be done by running the following:

```bash
deactivate
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 4. Update your Database configuration

Currently this application uses a postgres database, but for local development if may be quicker for you to use SQLite.

Open ```api/settings.py```

If you would like to use SQLite, uncomment the SQLite config. If you would like to use postgres, enter your postgres information.
```
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.postgresql',
#        'NAME': 'db',
#        'USER': 'postgres',
#        'PASSWORD': '1234',
#        'HOST': 'db',
#        'PORT': 5432,
#    }
# }

```

### 5. Migrate Database

```bash
python manage.py migrate
```

### 6. Start Django server

```bash
python manage.py runserver 0.0.0.0:8000
```
