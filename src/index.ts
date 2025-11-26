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

function getEnv_base() {
  return {
    CLIENT_ID: 'ZTUx5eUI1mXPQguGxEAB',
    CLIENT_SECRET: 'dvlhWGsKaO',
    SERVICE_ACCOUNT: '81hhn.serviceaccount@tripath-trial',
    PRIVATE_KEY:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCUj/jx/PSh6PXh0P02x0niFxZmoK5U5Mq/s+WwPQkiCHlyaGaQO2Lo7joug7jZmLCH+8loqR+ydnpCjPzarn6WDaJSC2TvXXe9fEAbKCRHM7Ke0+DUdZGl+3m2UpGheO5pzMwXKeKt2q3G5GulGfTIQJY81ve8ZRn5iVybD2CunbiZwk0u0zsCEt7J4t6NeblG+ybb8GlpA7wgv7EL2poQLijuWV1H+It9G41Cpi/G+ifTgJJUP6SkoELC4mpZKxugAHl2p7T8pHWGO3jHBUcW+K5J9s8D8kKwxq4neUtZ8fK9ou69kIo1BAG1/fLPaU9tP0QG6YueiUKSR1Ig1dIDAgMBAAECggEAU9kye3n2pI90f6BR2iH+vEGlngTgf/+lwy8I20CHsBKyYPU1tgAeojMa2Xf007NPJ2Df21dhEXu3I2qpp89GmPBXBhFyRXsugt7m26z7VMiD7wrM4Xz92H2nw1S05zr27PXu1sAINXGwFQqFCuksc/2oDeySZF13nJR/lPDH86UqR50IQDLlbxC/xqGGTspjcFxxlkv48fOZfiWZq/hBqhDuVVmS+s7P4MoPmp3HsW4IrVw7EsOU3zPr5jaey7mPYiLp13KJX87Yb+Wqiu3wR/tAYg9HS393MVRsZGbh9TT6JwwNZLPSYuiWD4oPGeQqqt8xxd8vX1TYYdfgkS1baQKBgQDUNdZZGHCXTMJkcX2/Oz0vWIDoDfkQrTGGUObgTPXXevZXa/bxQ3wxeWnxK3yQJQFflvM+czdUXbojj6D+KEdNXhCjpID/ASBedLd4mJqbNOK1XjHfZBFXm3FQ+79ncK1TR2dSiD3Ld4Yuw9BxVGnEiE5niclRyXzbXpW49X+8vwKBgQCzN+Nma5259Z9wwAxjkRoQVrHECP+Nn9JvfjoqyJxzx0X518Mj60fvL1vQiG+ApWK/ngADHHxt6DpyQ8zN2bmBAfpiCZJf883y9qXOf5iuPKEYZTpTwj4uO2iNAoKDV5pLkMtM6pbKoBkqYLnGlHAYMxm0VTL1lLWkzP+dmvHHvQKBgQDIkCmKA2NGXDHNpMXoGyD0wnzy1WH0tPv9qjDLBXHEul5guZWm6NVUHSBX43XS9maZ5Zz4BQTiI8NtIK5UB9V79c9cGnogiPwCyeUtgW1+CznJmMEiFP2fAzbSB10bco8eCnpIsqNUzh5vzHoQ4mskaH9RtBQlzHzJCFgRe1XDGQKBgBbZAimVgKcrdCcopKuw3PTGSKVoTEQe4vIJ0pqPtrpf5kDiy+LxZNtOW1MrgaOR8hPhrbi30fklCQZ2NE7t+eNDgEstUzbeWxwla5/2zl0wJ413okb5VXoJYtvPPRpHeck2bWSh55VvcaXgbO6vD9dV9Gn0DqoWSk33QIM0NKy1AoGAQqRHRjrS2M3IhA767EWf5a9wrv0m3cA8dzCHIYNKUJmCiu2aRZ+6+rzEPuy6r00p184rdeqC0i60ZTS7i2C/90oCcvQChgvDEDIFt8lsdjWSPyIwXA6VnPYMRCKwOatKSnXy7SPzWWndljsReH3AMgBUCv1maxupgEKljycoTQ8=\n-----END PRIVATE KEY-----',
    DOMAIN_ID: 10030257,
    ADMIN_ID: 'yamadashoki@tripath-trial',
    userId: '',
    channelId: '',
    BOT_ID: 0,
  };
}
// 確認通知BOT
function getEnv_confirm() {
  return {
    ...getEnv_base(),
    BOT_ID: 10412045,
  };
}

// 承認通知BOT
function getEnv_approve() {
  return {
    ...getEnv_base(),
    BOT_ID: 11184679,
  };
}

// 自身提出分確認通知BOT
function getEnv_selfConfirm() {
  return {
    ...getEnv_base(),
    BOT_ID: 11184760,
  };
}

function doPost(e: GoogleAppsScript.Events.DoPost) {
  try {
    const requestJSON =
      e.postData && e.postData.contents ? e.postData.contents : '{}';
    const requestObj = JSON.parse(requestJSON);
    const sheet = SpreadsheetApp.getActive().getActiveSheet();

    // determs を常に配列化（未定義なら空配列）
    const approversArray: unknown[] = [].concat(requestObj.determs || []);

    sheet.clear();
    sheet.appendRow([requestObj.action_type]);
    let header_text = '';

    const text =
      '申請者: ' +
      requestObj.request_user.name +
      '\n\n' +
      'タイトル: ' +
      requestObj.document_title +
      '\n\n' +
      'URL: ' +
      'https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=' +
      requestObj.document_id;

    // 申請完了時(決済)、本人に通知を送信
    if (
      requestObj.action_type === 'end' &&
      requestObj.flow_status === 'decision'
    ) {
      header_text = '【申請完了通知】\n\n';
      const env = getEnv_selfConfirm();
      env.userId = requestObj.request_user.email;
      LINEWORKS.userMessageSend(env, header_text + text);
      return;
    } else if (requestObj.action_type === 'reject') {
      // 申請却下時、本人に通知を送信
      header_text =
        '【申請却下通知】\n\n' + '申請が却下されました。確認してください。\n\n';
      const env = getEnv_selfConfirm();
      env.userId = requestObj.request_user.email;
      LINEWORKS.userMessageSend(env, header_text + text);
      return;
    } else if (requestObj.action_type === 'confirm') {
      // confirm (確認時)のアクションタイプは処理しない
      return;
    } else if (requestObj.action_type === 'accept') {
      // accept (承認時)のアクションタイプは判定者に通知を送信しない
      return;
    } else {
      // その他のアクションタイプ（承認要求、確認待ちなど）は判定者に通知を送信
      for (const approver of approversArray) {
        // 未定義や null をスキップ
        // eslint-disable-next-line eqeqeq
        if (approver == null) continue;

        // オブジェクト形式 { determ_user: { email: ... } } を優先
        if (typeof approver === 'object') {
          // 判定者メールアドレス
          const email =
            (approver as { determ_user?: { email?: string } }).determ_user
              ?.email || '';
          // 判定者名前
          const name =
            (approver as { determ_user?: { name?: string } }).determ_user
              ?.name || '';
          // シートに名前とメールアドレスを追加
          sheet.appendRow([name, email]);
          // 判定ステータス
          const determ_status =
            (approver as { determ_status?: string }).determ_status || '';
          sheet.appendRow([determ_status]);
          // 判定ステータスが確認待ちの場合のみ通知
          if (determ_status === 'unconfirm') {
            header_text = name + 'さん【確認通知】\n\n';
            const env = getEnv_confirm();
            env.userId = email;
            LINEWORKS.userMessageSend(env, header_text + text);
          }
          if (determ_status !== 'unconfirm') {
            header_text = name + 'さん【承認要求通知】\n\n';
            const env = getEnv_approve();
            env.userId = email;
            LINEWORKS.userMessageSend(env, header_text + text);
          }
        }
      }
    }
    // for (let i = 0; i < approversArray.length; i++) {
    //   const approver = approversArray[i];
    //   // 承認者の名前とメールアドレスを取得してシートに追加
    //   sheet.appendRow([approver]);
    //   // const env = getEnv_();
    //   // env.userId = approver.determ_user.email;
    //   // LINEWORKS.userMessageSend(env, 'コラボフロー通知テスト');
    // }
  } catch (error) {
    const env = getEnv_confirm();
    env.userId = 'yamadashoki@tripath-trial';
    LINEWORKS.userMessageSend(env, 'error: ' + String(error));
  }
}

// BOT作成とドメイン登録を行う関数（初回のみ実行）
// 参照:https://qiita.com/kunihiros/items/4cdec5784f21598cfee0
function createBot() {
  const env = getEnv_base();
  env.BOT_ID = LINEWORKS.qiitaSampleBotCreate(env).botId;
  LINEWORKS.qiitaSampleBotDomainRegister(env);
  Logger.log('BOT_ID: ' + String(env.BOT_ID));
}

// Gmailをチェックして、特定の条件に合致するメールがあればLINEWORKSのWebhookに通知を送信する関数(主に管理部確認用)
// トリガーで定期実行することを想定
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
                const env = getEnv_confirm();
                const text =
                  '申請の管理部全体向けの確認通知を受信しました。' +
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
