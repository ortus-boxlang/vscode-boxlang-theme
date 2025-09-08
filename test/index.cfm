<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BoxLang Sample Template</title>
</head>
<body>
    <h1>Welcome to BoxLang</h1>

    <cfset name="currentDate" value="#now()#" />
    <cfset name="users" value="[
        {name: 'John Doe', email: 'john@example.com', active: true},
        {name: 'Jane Smith', email: 'jane@example.com', active: false},
        {name: 'Bob Johnson', email: 'bob@example.com', active: true}
    ]" />

    <p>Current date: <cfoutput>#dateFormat(currentDate, 'mm/dd/yyyy')#</cfoutput></p>

    <h2>User List</h2>
    <cfif condition="#arrayLen(users) gt 0#">
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <cfloop array="#users#" index="user">
                    <tr>
                        <td><cfoutput>#user.name#</cfoutput></td>
                        <td><cfoutput>#user.email#</cfoutput></td>
                        <td>
                            <cfif condition="#user.active#">
                                <span style="color: green;">Active</span>
                            <cfelse>
                                <span style="color: red;">Inactive</span>
                            </cfif>
                        </td>
                    </tr>
                </cfloop>
            </tbody>
        </table>
    <cfelse>
        <p>No users found.</p>
    </cfif>

    <h2>Current Time</h2>
    <p>The current time is: <cfoutput>#timeFormat(now(), 'hh:mm:ss tt')#</cfoutput></p>

</body>
</html>