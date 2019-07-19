ARG := $(word 2, $(MAKECMDGOALS) )


clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

cleanmigs:
	@find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
	@find . -path "*/migrations/*.pyc"  -delete

test:
	pipenv run python manage.py test $(ARG) --parallel --keepdb

testreset:
	pipenv run python manage.py test $(ARG) --parallel
