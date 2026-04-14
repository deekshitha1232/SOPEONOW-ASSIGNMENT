from django.shortcuts import render
from django.conf import settings
import json
import os
def dashboard(request):
    file_path = os.path.join(settings.MEDIA_ROOT, 'management.json')

    with open(file_path, 'r') as f:
        data = json.load(f)

    context = {
        "jsonData": data,  # for charts (JS)
        "key_metrics": data.get("key_metrics", {}),
        "zonestats": data.get("zonestats", {}),
        "docstats": data.get("docstats", []),
        "completed": data.get("completed", {}),
        "inprogress": data.get("inprogress", {}),
        "graphs": data.get("graphs", {})
    }

    return render(request, 'reporting/index.html', context)