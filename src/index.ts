/**
 * Copyright 2025 Shoki Yamada
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// LINEWORKSのライブラリをGASで手動で導入しているが、ASIDEでの型定義がないため、
// 型定義をここに記述している。
interface LINEWORKS {
  userMessageSend: (env: unknown, text: string) => void;
  channelMessageSend: (env: unknown, text: string) => void;
  qiitaSampleBotCreate: (env: unknown) => { botId: number };
  qiitaSampleBotDomainRegister: (env: unknown) => void;
}
// eslint-disable-next-line no-var
declare const LINEWORKS: LINEWORKS;

function doPost(e: GoogleAppsScript.Events.DoPost) {
  // Logger.log(e);
  // try {
  //   const requestJSON = e.postData.contents;
  //   const requestObj = JSON.parse(requestJSON);
  //   const sheet = SpreadsheetApp.getActive().getActiveSheet();
  //   sheet.appendRow([requestObj]);
  //   const channelId = requestObj.source.channelId;
  //   const env = getEnv_();
  //   env.channelId = channelId;
  //   const text = channelId;
  //   // LINE WORKS にメッセージを送信
  //   // Ensure LINEWORKS is defined or imported before using it
  //   LINEWORKS.channelMessageSend(env, text);
  // } catch (error) {
  //   const env = getEnv_();
  //   env.userId = 'yamadashoki@tripath-trial';
  //   LINEWORKS.userMessageSend(env, 'test');
  // }
}

function doGet(e: GoogleAppsScript.Events.DoGet) {
  // const requestJSON = e.parameter.requestJSON;
  // const requestObj = JSON.parse(requestJSON);
  // const roomId = requestObj.source.roomId;
  // console.log(roomId);
}

function getEnv_() {
  return {
    CLIENT_ID: 'ZTUx5eUI1mXPQguGxEAB',
    CLIENT_SECRET: 'dvlhWGsKaO',
    SERVICE_ACCOUNT: '81hhn.serviceaccount@tripath-trial',
    PRIVATE_KEY:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCUj/jx/PSh6PXh0P02x0niFxZmoK5U5Mq/s+WwPQkiCHlyaGaQO2Lo7joug7jZmLCH+8loqR+ydnpCjPzarn6WDaJSC2TvXXe9fEAbKCRHM7Ke0+DUdZGl+3m2UpGheO5pzMwXKeKt2q3G5GulGfTIQJY81ve8ZRn5iVybD2CunbiZwk0u0zsCEt7J4t6NeblG+ybb8GlpA7wgv7EL2poQLijuWV1H+It9G41Cpi/G+ifTgJJUP6SkoELC4mpZKxugAHl2p7T8pHWGO3jHBUcW+K5J9s8D8kKwxq4neUtZ8fK9ou69kIo1BAG1/fLPaU9tP0QG6YueiUKSR1Ig1dIDAgMBAAECggEAU9kye3n2pI90f6BR2iH+vEGlngTgf/+lwy8I20CHsBKyYPU1tgAeojMa2Xf007NPJ2Df21dhEXu3I2qpp89GmPBXBhFyRXsugt7m26z7VMiD7wrM4Xz92H2nw1S05zr27PXu1sAINXGwFQqFCuksc/2oDeySZF13nJR/lPDH86UqR50IQDLlbxC/xqGGTspjcFxxlkv48fOZfiWZq/hBqhDuVVmS+s7P4MoPmp3HsW4IrVw7EsOU3zPr5jaey7mPYiLp13KJX87Yb+Wqiu3wR/tAYg9HS393MVRsZGbh9TT6JwwNZLPSYuiWD4oPGeQqqt8xxd8vX1TYYdfgkS1baQKBgQDUNdZZGHCXTMJkcX2/Oz0vWIDoDfkQrTGGUObgTPXXevZXa/bxQ3wxeWnxK3yQJQFflvM+czdUXbojj6D+KEdNXhCjpID/ASBedLd4mJqbNOK1XjHfZBFXm3FQ+79ncK1TR2dSiD3Ld4Yuw9BxVGnEiE5niclRyXzbXpW49X+8vwKBgQCzN+Nma5259Z9wwAxjkRoQVrHECP+Nn9JvfjoqyJxzx0X518Mj60fvL1vQiG+ApWK/ngADHHxt6DpyQ8zN2bmBAfpiCZJf883y9qXOf5iuPKEYZTpTwj4uO2iNAoKDV5pLkMtM6pbKoBkqYLnGlHAYMxm0VTL1lLWkzP+dmvHHvQKBgQDIkCmKA2NGXDHNpMXoGyD0wnzy1WH0tPv9qjDLBXHEul5guZWm6NVUHSBX43XS9maZ5Zz4BQTiI8NtIK5UB9V79c9cGnogiPwCyeUtgW1+CznJmMEiFP2fAzbSB10bco8eCnpIsqNUzh5vzHoQ4mskaH9RtBQlzHzJCFgRe1XDGQKBgBbZAimVgKcrdCcopKuw3PTGSKVoTEQe4vIJ0pqPtrpf5kDiy+LxZNtOW1MrgaOR8hPhrbi30fklCQZ2NE7t+eNDgEstUzbeWxwla5/2zl0wJ413okb5VXoJYtvPPRpHeck2bWSh55VvcaXgbO6vD9dV9Gn0DqoWSk33QIM0NKy1AoGAQqRHRjrS2M3IhA767EWf5a9wrv0m3cA8dzCHIYNKUJmCiu2aRZ+6+rzEPuy6r00p184rdeqC0i60ZTS7i2C/90oCcvQChgvDEDIFt8lsdjWSPyIwXA6VnPYMRCKwOatKSnXy7SPzWWndljsReH3AMgBUCv1maxupgEKljycoTQ8=\n-----END PRIVATE KEY-----',
    DOMAIN_ID: 10030257,
    ADMIN_ID: 'yamadashoki@tripath-trial',
    BOT_ID: 10412045,
    userId: '',
    channelId: '',
  };
}

function createBot() {
  const env = getEnv_();
  env.BOT_ID = LINEWORKS.qiitaSampleBotCreate(env).botId;
  LINEWORKS.qiitaSampleBotDomainRegister(env);
  Logger.log('BOT_ID: ' + String(env.BOT_ID));
}

function checkGmailAndNotifyWebhook() {
  const keyword = 'コラボフロー確認通知'; // 件名に含まれるキーワード（空の場合は無視）
  const senderEmail = 'tripath@collaboflow.com'; // 特定の送信者のメールアドレス（空の場合は無視）
  const numThreadsToProcess = 20; // 処理するスレッド数を指定
  const webhookUrl =
    'https://webhook.worksmobile.com/message/ed01d020-c8c7-44fe-bf85-1b5db0114df5';
  const lastProcessedDateKey = 'LAST_PROCESSED_DATE';
  const kanribuId = 'kanri@tripath-trial'; // 管理部アカウント(全体通知用ダミーアカウント)
  const kanribuChannelId = 'fec3b462-0c3f-b275-5c69-b0c4b83cb956'; // 管理部LINEWORKS確認通知用チャンネルID

  // 日付をフォーマットする関数
  function formatDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = ('0' + (date.getMonth() + 1)).slice(-2);
    const dd = ('0' + date.getDate()).slice(-2);
    const HH = ('0' + date.getHours()).slice(-2);
    const MM = ('0' + date.getMinutes()).slice(-2);
    return `${yyyy} 年 ${mm} 月 ${dd} 日 ${HH} 時 ${MM} 分`;
  }

  // 前回の処理日時を取得
  const properties = PropertiesService.getScriptProperties();
  const lastProcessedDate = properties.getProperty(lastProcessedDateKey);
  const lastProcessedTimestamp = lastProcessedDate
    ? new Date(lastProcessedDate).getTime()
    : 0;

  Logger.log(
    '開始: メールのチェックを開始します。前回の処理日時: ' + lastProcessedDate
  );

  try {
    const threads = GmailApp.getInboxThreads(0, numThreadsToProcess); // 指定した数のスレッドを取得
    Logger.log('取得したスレッド数: ' + threads.length);

    let newLastProcessedTimestamp = lastProcessedTimestamp; // 新しい最後の処理日時を初期化

    for (let i = 0; i < threads.length; i++) {
      // スレッドを順に処理
      const messages = threads[i].getMessages();

      for (let j = 0; j < messages.length; j++) {
        // メッセージを順に処理
        const message = messages[j];
        const messageDate = message.getDate().getTime();

        // メッセージが前回の処理日時以降であるかチェック
        if (messageDate > lastProcessedTimestamp) {
          const subject = message.getSubject();
          const from = message.getFrom();
          const body = message.getPlainBody();
          const formattedDate = formatDate(new Date(messageDate));

          // 条件をチェック
          const keywordMatch = !keyword || subject.includes(keyword);
          const senderMatch = !senderEmail || from.includes(senderEmail);

          if (keywordMatch && senderMatch) {
            Logger.log(
              '条件に一致するメールを発見: 件名: ' +
                subject +
                ', 送信者: ' +
                from
            );

            try {
              // bodyをJSONに変換する場合は、以下のようにする
              const bodyJson = JSON.parse(body);
              bodyJson.contacts.forEach((contact: string) => {
                const env = getEnv_();
                const text =
                  '申請の確認通知を受信しました。' +
                  '\n\n' +
                  '申請者: ' +
                  bodyJson.who +
                  '\n\n' +
                  '受信日時: ' +
                  formattedDate +
                  '\n\n' +
                  'タイトル: ' +
                  bodyJson.title +
                  '\n\n' +
                  'URL: ' +
                  bodyJson.url;
                if (contact === kanribuId) {
                  // 通知先のアカウントが管理部アカウントの場合は、チャンネルIDを設定してメッセージを送信
                  env.channelId = kanribuChannelId;
                  LINEWORKS.channelMessageSend(env, text);
                } else {
                  // 管理部アカウントではない場合は、ユーザーIDを設定してメッセージを送信
                  env.userId = contact;
                  LINEWORKS.userMessageSend(env, text);
                }
              });
            } catch (e) {
              Logger.log(
                'LINEWORKSのメッセージ送信が失敗しました: 件名: ' +
                  subject +
                  ', エラー: ' +
                  String(e)
              );
            }
          }

          // メッセージの日時を新しい最後の処理日時として更新
          if (messageDate > newLastProcessedTimestamp) {
            newLastProcessedTimestamp = messageDate;
          }
        }
      }
    }

    // 新しい最後の処理日時を保存
    properties.setProperty(
      lastProcessedDateKey,
      new Date(newLastProcessedTimestamp).toISOString()
    );
    Logger.log(
      '完了: メールのチェックを完了しました。新しい最後の処理日時: ' +
        new Date(newLastProcessedTimestamp).toISOString()
    );
  } catch (e) {
    Logger.log(
      'メールの取得中にエラーが発生しました: ' + (e as Error).toString()
    );
  }
}
