const { CommandInteraction } = require("discord.js");
var XMLHttpRequest = require('xhr2');
var os = require('os');
var chilkat = require('@chilkat/ck-node16-linux64'); 
const { MessageEmbed } = require('discord.js');
var con = //require('../../handler/database/database.js')

module.exports = {
    name: 'redeem',
    description: 'Usage: /redeem <token> <product key>',
    options: [
        {
            type:"STRING",
            name: 'token',
            description: 'Your discord alt account auth token.',
            required: true,
        },
        {
            type:"STRING",
            name: 'product-key',
            description: 'The product key you bought.',
            required: true,
        },
    ],
    
    run: async(client,interaction, args) => {
        

        const [message] = args;
        var url = "https://www.vorpal.gg/API/DiscordLicenseAPI";
        var crypt = new chilkat.Crypt2();
        var crypt2 = new chilkat.Crypt2();
        var cert = new chilkat.Cert();
        var xhr = new XMLHttpRequest();
        crypt2.EncodingMode = "hex";
        crypt2.HashAlgorithm = "md5";
        let user;
        user = interaction.member;
        xhr.open("POST", url);
        xhr.setRequestHeader("Accept", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("ValorId", "YXV0aF92b3JwYWxfNjBlZjE5OWMyMTEwMA");
        xhr.setRequestHeader("ValorKey", crypt2.HashStringENC("2021"));

        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              cert.LoadPem("-----BEGIN CERTIFICATE-----MIIFlzCCA38CFG4U8aVkk1JrQnavtt8H7XDX+rdAMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJBVTEOMAwGA1UECAwFRmFpdGgxDjAMBgNVBAcMBUZhaXRoMRkwFwYDVQQKDBBGYWl0aCBJbmR1c3RyaWVzMQ4wDAYDVQQLDAVGYWl0aDEOMAwGA1UEAwwFRmFpdGgxHTAbBgkqhkiG9w0BCQEWDkFkbWluQGZhaXRoLnNvMB4XDTIxMDcxNzEyNTA0NloXDTIyMDcxNzEyNTA0NlowgYcxCzAJBgNVBAYTAkFVMQ4wDAYDVQQIDAVGYWl0aDEOMAwGA1UEBwwFRmFpdGgxGTAXBgNVBAoMEEZhaXRoIEluZHVzdHJpZXMxDjAMBgNVBAsMBUZhaXRoMQ4wDAYDVQQDDAVGYWl0aDEdMBsGCSqGSIb3DQEJARYOQWRtaW5AZmFpdGguc28wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCwUSjgLtJfoK27Nx95WM80MoCqs8OVEm4LWp/Ok80JoK16CMN3v4878sOdrWMCb4kWkXoOBSIygnj1jdOsg0l/smbhPvhAmCpfiGvHNA6imyy4g7Wzwn769Kuy5p+CuNHIVHegjL5QMdqSMsJVyj/D+34t0HO7u0Liy0x8G0sfKZ8e0O6QHwpAkj7iGtXcPYAEoayacAqFYxC1dXVZv7okUQ700OE78sgNiJ8sj3h+fEG63LFQqmz3/LsO3ZT4r2c49G1XcS1VU/lUScttvrnnmQwhZ4lvhiq8ItG9mVMuYSspq3wMAphC6U+wPSfe1Gsp72GQ6m9bUaUzbKWK4nUiV5gHucYvsN/t8vjign4aw6Z7BGgF7IZw6y6uTUJWAUSC+b8SB9oTbvtbe3JN49NONUr4EEr9v7DkizKoIsAM04B4idb96uPw2cB31KbvVqJ8el+rcjh/Cz2ZLr8k/A8Ig08n5uHz6/GNbD5i28YXu8jt4nHyoIE/jGhPVS2ZEPC54CEqxpMjz9Bw0tI2mcw5qQMhXdvpL2qR2s5USWPUaokspLQWm9ExSh8Qz1LjGrg99maiHqqP3hiwe4uvmgYyL/x4NCfR6jEetjqiX+csxbM5hmG9iMlC0G/oR++aRyeOZhyCNKrWSvCs7qHd/oaF6hWxA9kDO5k/zFbqvw2/qQIDAQABMA0GCSqGSIb3DQEBCwUAA4ICAQBm+ffH42ocs4FOlLRtmzTMIRA6v+002mFXiDP3n8GiCmA6wgpLxkSGQ7YdxkPTqbrsVVItuFbQeAIGDsIFrk4xVBt+3hCZ77lFwGDUrJ30VaP6zzcJ2xyLr5she54DPzMBU/sLl5ok4JbxaAxh7rkx8fwWuQfCR3Bpvy1nlHkbstcxGN6jfW6IrjEFRxGtu9DFBBlEzh7EcPkAEZjoO8VVV8VHK8Eg8psFSNmy5xVdinuzrFTp6XE8M83VpvWgLawk1bBq77OJ45zjtVLnlAF7a83O/LqKop28HcFLfvDc4yAdmJVUG3eDKFh9DnBNWsie62eciwsVM6C8RckbTQIuhXBlnpIBoVBEYSx6nOeIirDBYohAy5G7pgrdRvaL8pvjL21xjfL+7YhZgSOttSlhPVbSRqspDxDXKqPK1mfbqnYbsvLkap+ar4n5vEO7FoWUCaTjKK71VnvsxZ2bzsVS/Tnl48u7ugY58dFaZyaWEkHt5GRGHbXT0OGC1+VNagn3oKI1ZnLHJQI2YoEfmZ1FeFOtBEe64hYchYz1JZOQ3kJ7uiluOdJOkTTZcsS7rEJsbnJKEuO01vqSBVB7RDlOdBiUw+G3m/pa+y2vI2o+gaoEvheUjwD09UyyO+zHCbl+Gcqq6eXYxzBISWWyShaY7PIV+mveDXuiF/yJ7sBurw==-----END CERTIFICATE-----");
              cert.SetPrivateKeyPem("-----BEGIN PRIVATE KEY-----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-----END PRIVATE KEY-----");
              
              crypt.SetEncryptCert(cert);
              
              crypt.CryptAlgorithm = "pki";
              crypt.Pkcs7CryptAlg= "aes";
              crypt.KeyLength = 128;
              crypt.OaepHash= "sha256";
              crypt.OaepPadding= true;
              crypt.Charset= "utf-8";
              crypt.EncodingMode= "base64";
              var decryptString = crypt.DecryptStringENC(xhr.responseText);
             // console.log(decryptString);
             const jsonParse = JSON.parse(decryptString);

            if(jsonParse.Error == "" | !jsonParse.Error){

                con.SSHConnection.then(function(result){
                    result.query(`SELECT * FROM unclaimed_keys`, function (error, result2, fields) {
                        if (error) throw error; // <- this might not work
                        var found;
                        for(var i=0;i<result2.length;i++){
                            if(result2[i].KeyName == `${jsonParse.Key}`){
                                console.log(`${user.id} has fetched ${result2.KeyName}`);
                               found = "claimed";
                               break;
                            }
                         }
                        console.log(found);
                        if(found != "claimed"){
                            result.query(`INSERT INTO unclaimed_keys(KeyName, claimedBy, Expiry) VALUES("${jsonParse.Key}", ${user.id}, ${jsonParse.Expiry})`, function (error, result, fields) {
                                if (error) throw error; // <- this might not work
                                //console.log(result);
                                 // inside a command, event listener, etc.
                                 console.log(`${user.id} has Claimed ${jsonParse.Key}`);
                                const exampleEmbed = new MessageEmbed()
                                .setColor('#509624')
                                .setURL('https://discord.js.org/')
                                .setAuthor('Redeem a Product', `${user.displayAvatarURL({dynamic:true,size:4096})}`, 'https://dankord.com')
                                .setThumbnail(`${user.displayAvatarURL({dynamic:true,size:4096})}`)
                                .addFields(
                                    { name: 'Claimed Key...', value: `${user} has claimed a key`},
                                )
                                .setTimestamp()
                		.setFooter('Dankord', 'https://cdn.discordapp.com/icons/902972970790682644/f4c2f5ea801964663e1f7f6b3386c1c1.png?size=96');
    
                                interaction.followUp({ embeds: [exampleEmbed] });
                            });
                         
                        }else {
                            const exampleEmbed = new MessageEmbed()
                            .setColor('#ffcc00')
                            .setURL('https://discord.js.org/')
                            .setAuthor('Claimed Key', `${user.displayAvatarURL({dynamic:true,size:4096})}`, 'https://dankord.com')
                            .setThumbnail(`${user.displayAvatarURL({dynamic:true,size:4096})}`)
                            .addFields(
                                { name: 'Claiming Key...', value: `Key has already been claimed.`},
                            )
                            .setTimestamp()
                	    .setFooter('Dankord', 'https://cdn.discordapp.com/icons/902972970790682644/f4c2f5ea801964663e1f7f6b3386c1c1.png?size=96');    
                            interaction.followUp({ embeds: [exampleEmbed] });
                        }
                        //console.log(result);
                      });
                });
            }else{
                const exampleEmbed = new MessageEmbed()
                .setColor('#ee0000')
                .setURL('https://discord.js.org/')
                .setAuthor('Claimed Key', `${user.displayAvatarURL({dynamic:true,size:4096})}`, 'https://dankord.com')
                .setThumbnail(`${user.displayAvatarURL({dynamic:true,size:4096})}`)
                .addFields(
                    { name: 'Error', value: `${jsonParse.Error}`, inline: true},
                )
               
                .setTimestamp()
                .setFooter('Dankord', 'https://cdn.discordapp.com/icons/902972970790682644/f4c2f5ea801964663e1f7f6b3386c1c1.png?size=96');

                interaction.followUp({ embeds: [exampleEmbed] });
            }
        }};
        var encodedString = btoa(message);
        var data = 'licenseKey=' + encodedString;
        
        xhr.send(data);
    },
};