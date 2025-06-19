const roster = document.getElementById("roster");

const rosterArr = [
    {
        name: "Bam Adebayo", 
        image: "https://www.usab.com/imgproxy/yA8kQIRH7R1U7HetNPoCYpiIBw-ZcMszffgPwRsqt8w/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvMzliOGU0YTYtZTQ2YS00YWQ4LTllZWEtYjE3ZGNkYmFkYzQ4LmpwZw.png", 
        number: 13, 
        position: "Center", 
        height: "6-9", 
        weight: 255, 
        age: 27, 
        team: "Miami Heat"
    },
    {
        name: "Devin Booker", 
        image: "https://www.usab.com/imgproxy/dluOdOH8w2OVJZcIXsX6w-GL-OJG74PUkb56fZDO6dc/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvNDFkNjIyZjktNTBjNy00YmEyLThhZTktOGE2MThhMzA0YjljLmpwZw.png",
        number: 15, 
        position: "Guard", 
        height: "6-5", 
        weight: 208, 
        age: 28, 
        team: "Phoenix Suns"
    },
    {
        name: "Stephen Curry", 
        image: "https://www.usab.com/imgproxy/qBABZwWRZ71S1hqM_Bqjayn9vpO6cWgPP_Ki7X4dWmc/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvNDc0OTRhNTktYmM2NC00MmRiLWJmNDctNTA1YjQ5ZmU4OTg2LmpwZw.png",
        number: 4, 
        position: "Guard", 
        height: "6-2", 
        weight: 185, 
        age: 37, 
        team: "Golden State Warriors"
    },
    {
        name: "Anthony Davis",
        image: "https://www.usab.com/imgproxy/bW8yuRsMHPZVaKMJFmsAUzdDynLCRg9kcV8tmpmqt6M/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvMjYzYWZhZjYtMzhkYS00NGI1LThkYmItMmRkYWZhYmQ0YmNiLmpwZw.png", 
        number: 14, 
        position: "Forward/Center", 
        height: "6-11", 
        weight: 253, 
        age: 32, 
        team: "Dallas Mavericks"
    },
    {
        name: "Kevin Durant",
        image: "https://www.usab.com/imgproxy/t_5TqEqmnXzM2fyls-IgIMBDB7pYmD6pU6j4oVTevhI/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvMDI1NTQ0YzgtNjgzYS00ZWJjLThhYTAtYTdjOTFmZTU3ODhjLmpwZw.png",
        number: 7, 
        position: "Forward", 
        height: "6-10", 
        weight: 225, 
        age: 36, 
        team: "Phoenix Suns"
    },
    {
        name: "Anthony Edwards", 
        image: "https://www.usab.com/imgproxy/TEL0U29KzbNOA0OT4qUST-u32GTyDiv-ClZ5FLasGD0/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvODk4M2ZmZGQtMDU1My00ZTYyLThjYmQtMmM5YWViODZiYjQ0LmpwZw.png",
        number: 5, 
        position: "Guard", 
        height: "6-4", 
        weight: 225, 
        age: 23, 
        team: "Minnesota Timberwolves"
    },
    {
        name: "Joel Embiid", 
        image: "https://www.usab.com/imgproxy/1G-JUd2txC_r_VsurVTSYqcnE3uxY1v9aEYukpH18HY/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvYmIzYjkxZDktMzgzNy00YzZjLWJlYmEtNmRjODUyNjAwNjQwLmpwZw.png",
        number: 11, 
        position: "Center", 
        height: "7-0", 
        weight: 280, 
        age: 31, 
        team: "Philadelphia 76ers"
    },
    {
        name: "Tyrese Haliburton", 
        image: "https://www.usab.com/imgproxy/bxvt5vcJlnoBu1Lf1TO3sda5ITnaLQ0UVrD9g_kaM1Q/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvMmMwNjU4ZTctOTgwOS00ZjYxLTk1NDMtNGM5MmU2YmUwMWE4LmpwZw.png",
        number: 9, 
        position: "Guard", 
        height: "6-5", 
        weight: 185, 
        age: 25, 
        team: "Indiana Pacers"
    },
    {
        name: "Jrue Holiday",
        image: "https://www.usab.com/imgproxy/RthRIzw7yuIM3iTdcvsa3W0aPcEyGrEi--hWSJTUb7U/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvNmNlNmNmYjYtMTIyZS00NGI1LWJiZGItZTg5ODUxMjQ3ZjViLmpwZw.png",
        number: 12, 
        position: "Guard", 
        height: "6-3", 
        weight: 229, 
        age: 35, 
        team: "Boston Celtics"
    },
    {
        name: "Lebron James", 
        image: "https://www.usab.com/imgproxy/ziarB3UvXnVI_LC7nZ-bQGhvzCd55ihxL9jx7PNKzt4/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvZGJkOTVjZWUtNDBlOS00MjBlLWEzZjAtMGI2M2Q3MDczMTk3LmpwZw.png",
        number: 6, 
        position: "Forward", 
        height: "6-9", 
        weight: 250, 
        age:40, 
        team: "Los Angeles Lakers"
    },
    {
        name: "Jayson Tatum", 
        image: "https://www.usab.com/imgproxy/RaEc8oAbN7I6TXdhQRgr19mhEqk1ocsyfgiqdUYyrwY/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMDkvYjE2YmQyOGQtNmU0MS00ZGJmLWI1OGUtMDFiM2E5OTA1NTNkLmpwZw.png",
        number: 10, 
        position: "Forward", 
        height: "6-8", 
        weight: 205, 
        age: 27, 
        team: "Boston Celtics"
    },
    {
        name: "Derrick White",
        image: "https://www.usab.com/imgproxy/D10eTCvrslHTmLzboEspIEZTE-1-8SOE87s0Bw9IjQg/rs:fit:3000:0:0/g:ce/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjQvMDcvMTUvOTJhOTA5MzYtNTRmMS00MDBiLTgxYjItYWQxOGFmYTYxNzg2LnBuZw.png",
        number: 8, 
        position: "Guard", 
        height: "6-4",
        weight: 190, 
        age: 30, 
        team: "Boston Celtics"
    }
];

   

rosterArr.forEach((player) => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");

        const playerPic = document.createElement("img");
        playerPic.classList.add("player-pic");

        const playerIframe = document.createElement("iframe");
        playerIframe.classList.add("player-video");
        playerIframe.setAttribute("allowfullscreen", "");
        playerIframe.setAttribute("frameborder", "0");
        playerIframe.style.display = "none";
        playerIframe.allow = "autoplay; encrypted-media";

        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");

        const playerName = document.createElement("h3");
        playerName.classList.add("player-name");

        const playerNumber = document.createElement("div");
        playerNumber.classList.add("player-number");
        const playerNumberP = document.createElement("p");

        const playerInfo = document.createElement("div");
        playerInfo.classList.add("player-info");
        const playerInfo1 = document.createElement("p");
        const playerInfo2 = document.createElement("p");
        const playerInfo3 = document.createElement("p");
        const playerInfo4 = document.createElement("p");
        const playerInfo5 = document.createElement("p");

        
        roster.appendChild(playerCard);
        playerCard.appendChild(playerPic);
        playerCard.appendChild(playerIframe);
        playerCard.appendChild(playerDiv);
        playerDiv.appendChild(playerName)
        playerDiv.appendChild(playerNumber);
        playerNumber.appendChild(playerNumberP);
        playerDiv.appendChild(playerInfo);
        playerInfo.appendChild(playerInfo1);
        playerInfo.appendChild(playerInfo2);
        playerInfo.appendChild(playerInfo3);
        playerInfo.appendChild(playerInfo4);
        playerInfo.appendChild(playerInfo5);
        

        playerPic.src = player.image;
        playerName.innerHTML = player.name;
        playerNumberP.innerHTML = `#${player.number}`;
        playerInfo1.innerHTML = `Position(s) <span class="details">${player.position}</span>`;
        playerInfo2.innerHTML = `Height <span class="details">${player.height}</span>`;
        playerInfo3.innerHTML = `Weight <span class="details">${player.weight}</span>`;
        playerInfo4.innerHTML = `Age <span class="details">${player.age}</span>`;
        playerInfo5.innerHTML = `NBA Team <span class="details">${player.team}</span>`;

   
        const defaultInfo = {
            infoPic: playerPic.src,
            info1: playerInfo1.innerHTML,
            info2: playerInfo2.innerHTML,
            info3: playerInfo3.innerHTML,
            info4: playerInfo4.innerHTML,
            info5: playerInfo5.innerHTML,
        };

    


        playerCard.addEventListener("mouseenter", () => {

            const stat = stats.find(s => s.name.toLowerCase() === player.name.toLowerCase());

            if (stat) {
                
                const infoPs = playerInfo.querySelectorAll("p");
                
                infoPs.forEach(p => p.classList.add("fade-out"))



                setTimeout(() => {
                

                playerPic.style.display = "none";
                playerIframe.style.display = "block";
                playerIframe.src = `https://www.youtube.com/embed/${stat.video}?autoplay=1&mute=1`;
            

                playerInfo1.innerHTML = `Minutes Per Game: <span class="details">${stat.minutes}</span>`;
                playerInfo2.innerHTML = `Points Per Game: <span class="details">${stat.points}</span>`;
                playerInfo3.innerHTML = `Assists Per Game: <span class="details">${stat.assists}</span>`;
                playerInfo4.innerHTML = `Rebounds Per Game: <span class="details">${stat.rebounds}</span>`;
                playerInfo5.innerHTML = `Field Goal Percentage: <span class="details">${stat.fieldGoal}</span>`;
                infoPs.forEach(p => p.classList.remove("fade-out"));
                playerDiv.removeChild(playerNumber)

                }, 150);
            };
        });

        playerCard.addEventListener("mouseleave", () => {

                const infoPs = playerInfo.querySelectorAll("p");

                infoPs.forEach(p => p.classList.add("fade-out"));


            setTimeout(() => {
            
            playerIframe.style.display = "none";
            playerPic.style.display = "block";    
            playerPic.src = defaultInfo.infoPic;


            playerInfo1.innerHTML = defaultInfo.info1;
            playerInfo2.innerHTML = defaultInfo.info2;
            playerInfo3.innerHTML = defaultInfo.info3;
            playerInfo4.innerHTML = defaultInfo.info4;
            playerInfo5.innerHTML = defaultInfo.info5;
            infoPs.forEach(p => p.classList.remove("fade-out"));
            playerDiv.appendChild(playerNumber)

            }, 150);
        });
   
    });


   



const stats = [
     {
        name: "Bam Adebayo", 
        video: "3LMoEE_wcXI", 
        minutes: 16.3,
        points: 12.8,
        assists: 1.2,
        rebounds: 2.8,
        fieldGoal: "58.0%",
    },
    {
        name: "Devin Booker", 
        video: "oXbquOBaPqU", 
        minutes: 22.0,
        points: 11.7,
        assists: 3.3,
        rebounds: 2.7,
        fieldGoal: "57.1%",
    },
    {
        name: "Stephen Curry", 
        video: "DPDUDPCttfc", 
        minutes: 23.3,
        points: 14.8,
        assists: 2.5,
        rebounds: 3.2,
        fieldGoal: "50.0%",
    },
    {
        name: "Anthony Davis", 
        video: "NAQA85RvVk4", 
        minutes: 16.6,
        points: 8.3,
        assists: 2.0,
        rebounds: 6.7,
        fieldGoal: "62.5%",
    },
    {
        name: "Kevin Durant", 
        video: "hLKeXdNHdoY", 
        minutes: 22.2,
        points: 13.8,
        assists: 2.3,
        rebounds: 3.2,
        fieldGoal: "54.0%",
    },
    {
        name: "Anthony Edwards", 
        video: "KXHhzJsZSSU", 
        minutes: 16.1,
        points: 6.0,
        assists: 1.3,
        rebounds: 3.7,
        fieldGoal: "53.3%",
    },
    {
        name: "Joel Embiid", 
        video: "z30EACsP-Yw", 
        minutes: 16.6,
        points: 11.2,
        assists: 1.4,
        rebounds: 3.8,
        fieldGoal: "56.8%",
    },
    {
        name: "Tyrese Haliburton", 
        video: "1UHq1sxGZg0", 
        minutes: 8.8,
        points: 2.7,
        assists: 0.7,
        rebounds: 1.0,
        fieldGoal: "60.0%",
    },
    {
        name: "Jrue Holiday", 
        video: "JPwpwe2UWVc", 
        minutes: 18.8,
        points: 7.6,
        assists: 3.6,
        rebounds: 1.8,
        fieldGoal: "55.6%",
    },
    {
        name: "Lebron James", 
        video: "tQnAQGjYuTM", 
        minutes: 24.5,
        points: 14.2,
        assists: 8.5,
        rebounds: 6.8,
        fieldGoal: "66.0%",
    },
    {
        name: "Jayson Tatum", 
        video: "BIm0UHgHBls", 
        minutes: 15.8,
        points: 3.8,
        assists: 1.6,
        rebounds: 1.4,
        fieldGoal: "41.2%",
    },
    {
        name: "Derrick White", 
        video: "4j20oa3Xsd4", 
        minutes: 16.8,
        points: 11.2,
        assists: 1.4,
        rebounds: 3.8,
        fieldGoal: "56.8%",
    },
]



   
