import requests

def appendTBAMatchResultsToSheet(eventCode: str):
    results = getTBAMatchResults(eventCode)
    for match in results:
        red_bots = match['alliances']['red']['team_keys']
    # fetch all match results for current event
    # load match details we care about into a map by match key
    # fetch rows from scouting sheet
    # update each row with the relevant match/alliance/teamNum stats
    # write row back to sheets
    return

def getTBAMatchResults(eventCode: str):
    response = requests.get(f'https://www.thebluealliance.com/api/v3/event/{eventCode}/matches', headers={'X-TBA-Auth-Key': '0DAyI19O7g9ZOMe1BohkeEjrhxUjNLt1y595LvuL9d4O94igsaozCrAzA7RBlbrf'})
    print(response.json())
    return response.json()

getTBAMatchResults('2023week0')