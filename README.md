# SOPEONOW - Reporting Dashboard

## Project Overview
This project is developed as part of the assignment to build a dynamic reporting dashboard using Django.

The application reads data from a JSON file and displays it on a dashboard UI based on the provided Figma design. It also renders dynamic charts using ApexCharts.

---

## Features

- Django-based backend
- JSON data integration
- Dynamic dashboard rendering using Django templates
- ApexCharts integration for graphs
- Time conversion from seconds to HH:MM format
- Key metrics display
- Zone statistics
- Doctor statistics table
- Search and pagination using DataTables
- Responsive UI (no scroll, viewport-based design)

---

## Tech Stack

- Python (Django)
- HTML, CSS, Bootstrap
- JavaScript, jQuery
- ApexCharts

---

## Project Structure

SOPEONOW/
│── Reporting/
│── templates/
│── static/
│── media/ (JSON file)
│── manage.py
│── requirements.txt
│── README.md

---

## Setup Instructions

1. Clone the repository

git clone https://github.com/deekshitha1232/SOPEONOW.git
cd SOPEONOW

2. Create virtual environment

python -m venv venv
venv\Scripts\activate

3. Install dependencies

pip install -r requirements.txt

4. Run the server

python manage.py runserver

5. Open in browser

http://127.0.0.1:8000/

---

## Data Handling

- Data is loaded from JSON file placed in media/
- Passed to frontend via Django views
- Rendered dynamically using template engine

---

## Time Conversion

Custom Django template filter is used to convert seconds to HH:MM format.

Example:
3660 becomes 01:01

---

## Charts

Charts are implemented using ApexCharts.

Data is passed dynamically using:
{{ jsonData|escapejs }}

---

## Notes

- No inline CSS used
- Icons used from Bootstrap Icons and Material Icons
- Layout matches Figma design
- No vertical or horizontal scroll
