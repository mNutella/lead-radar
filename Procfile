web: gunicorn leadradar.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app=leadradar --loglevel=info
