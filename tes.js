<!DOCTYPE HTML>
<HTML>

<HEAD>
    <SCRIPT type="text/javascript" src="jquery-1.8.3.js"></SCRIPT>
    <SCRIPT type="text/javascript">
        $(document).ready(function () {
            $(".view").click(function () {
                $("h3").toggle('fast');
            });
        });
    </SCRIPT>
</HEAD>

<BODY>
    <H3> Show and Hide me Quickly</H3>
    <HR>
    <BUTTON class="view">Click here</BUTTON>
</BODY>

</HTML>
