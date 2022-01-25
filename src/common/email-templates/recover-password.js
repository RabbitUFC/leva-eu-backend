exports.recoverPasswordTemplate = (code) => {
  const html = `
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

      <style type="text/css">
        .tg {
          border: none;
          border-collapse: collapse;
          border-spacing: 0;
          margin: 0px auto;
        }

        .tg td {
          border-style: solid;
          border-width: 0px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          overflow: hidden;
          padding: 10px 5px;
          word-break: normal;
        }

        .tg th {
          border-style: solid;
          border-width: 0px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: normal;
          overflow: hidden;
          padding: 10px 5px;
          word-break: normal;
        }

        .tg .tg-0pky {
          border-color: inherit;
          text-align: left;
          vertical-align: top
        }

        @media screen and (max-width: 767px) {
          .tg {
            width: auto !important;
          }

          .tg col {
            width: auto !important;
          }

          .tg-wrap {
            overflow-x: auto;
            -webkit-overflow- scrolling: touch;
            margin: auto 0px;
          }
        }
      </style>
    </head>

    <div style="background:#fff; max-width:600px; margin:10px auto; padding:15px">
      <div class="tg-wrap">
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-0pky" style="text-align: center;">
                <img src="https://leva-eu.s3.amazonaws.com/logo.png" class="CToWUd">
              </th>
            </tr>
            <tr>
              <th class="tg-0pky" style="text-align: center;">
                <p>Seu código de recuperação é ${code}</p>
                <hr style="margin: 20px">

                <h4 style="color:#464c5d; font-size:14px; text-align: center;">
                  Por favor, não responda a este e-mail.
                </h4>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  `;

  return html;
};
