from django import template

register = template.Library()


@register.filter
def seconds_to_hhmm(value):
  
    try:
        value = int(value)

        hours = value // 3600
        minutes = (value % 3600) // 60

        return f"{hours:02d}:{minutes:02d}"
    except:
        return "00:00"



@register.filter
def div(value, arg):
    """
    Use ONLY for inprogress (triage/consult)
    Example:
        total_time / count → avg_time
    """
    try:
        value = int(value)
        arg = int(arg)

        if arg == 0:
            return 0

        return value // arg
    except:
        return 0