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

    const selfConfirmText =
      `【申請完了通知】\n\n` +
      `申請が完了しました。\n\n` +
      `文書タイトル: ${requestObj.document_title} \n` +
      `申請書URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=${requestObj.document_id}`;
    // 申請完了時(決済)、本人に通知を送信
    if (
      requestObj.action_type === 'end' &&
      requestObj.flow_status === 'decision'
    ) {
      const env = getEnv_selfConfirm();
      env.userId = convertLineWorksAccountIdFromEmail(
        requestObj.request_user.email
      );
      // 出張申請の場合を除いて(出張申請という文字列からはじまらない)本人に完了通知を送信
      // 出張申請は別途タスク通知メールで完了通知を送信する
      if (requestObj.document_title.startsWith('出張申請') === false) {
        LINEWORKS.userMessageSend(env, selfConfirmText);
      }
    } else if (requestObj.action_type === 'reject') {
      // 申請却下時、本人に通知を送信
      const rejectText =
        `【申請却下通知】\n\n` +
        `申請が却下されました。確認してください。\n\n` +
        `文書タイトル: ${requestObj.document_title} \n` +
        `申請書URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=${requestObj.document_id}`;
      const env = getEnv_selfConfirm();
      env.userId = convertLineWorksAccountIdFromEmail(
        requestObj.request_user.email
      );
      LINEWORKS.userMessageSend(env, rejectText);
      return;
    } else if (requestObj.action_type === 'confirm') {
      // confirm (確認時)のアクションタイプは処理しない
      return;
    } else if (requestObj.action_type === 'accept') {
      // accept (承認時)のアクションタイプは判定者に通知を送信しない
      return;
    } else if (requestObj.action_type === 'remand') {
      // remand (差戻し時)のアクションタイプは本人(本人にしか差し戻せない設定にする)に通知を送信
      const rejectText =
        `【申請差し戻し通知】\n\n` +
        `申請が差し戻されました。確認してください。\n\n` +
        `文書タイトル: ${requestObj.document_title} \n` +
        `申請書URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=${requestObj.document_id}`;
      const env = getEnv_selfConfirm();
      env.userId = convertLineWorksAccountIdFromEmail(
        requestObj.request_user.email
      );
      LINEWORKS.userMessageSend(env, rejectText);
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
            const confirmText =
              `${name}さん【確認通知】\n\n` +
              `あなたの確認が必要な申請があります。\n\n` +
              `申請者: ${requestObj.request_user.name} \n` +
              `申請者部署: ${requestObj.request_group.name} \n` +
              `文書タイトル: ${requestObj.document_title} \n` +
              `文書番号: ${requestObj.document_number} \n` +
              `申請書URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=${requestObj.document_id}`;
            const env = getEnv_confirm();
            env.userId = convertLineWorksAccountIdFromEmail(email);
            LINEWORKS.userMessageSend(env, confirmText);
          }
          // 判定ステータスが未承認の場合
          else if (determ_status === 'undeterm') {
            const determText =
              `${name}さん【承認要求通知】\n\n` +
              `あなたの承認が必要な申請があります。\n\n` +
              `申請者: ${requestObj.request_user.name} \n` +
              `申請者部署: ${requestObj.request_group.name} \n` +
              `文書タイトル: ${requestObj.document_title} \n` +
              `文書番号: ${requestObj.document_number} \n` +
              `申請書URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz_DocumentDesc&det=no&nPinstanceCD=${requestObj.document_id}`;
            const env = getEnv_approve();
            env.userId = convertLineWorksAccountIdFromEmail(email);
            LINEWORKS.userMessageSend(env, determText);
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
    LINEWORKS.userMessageSend(env, `error: ${String(error)}`);
  }
}

// BOT作成とドメイン登録を行う関数（初回のみ実行）
// 参照:https://qiita.com/kunihiros/items/4cdec5784f21598cfee0
function createBot() {
  const env = getEnv_base();
  env.BOT_ID = LINEWORKS.qiitaSampleBotCreate(env).botId;
  LINEWORKS.qiitaSampleBotDomainRegister(env);
  Logger.log(`BOT_ID: ${String(env.BOT_ID)}`);
}

// Gmailをチェックして、特定の条件に合致するメールがあればLINEWORKSのWebhookに通知を送信する関数(主に管理部確認用)
// トリガーで定期実行することを想定
function checkGmailAndNotifyWebhook() {
  const keyword = 'コラボフロー確認通知'; // 件名に含まれるキーワード（空の場合は無視）
  const keywordTask = '[コラボフロー]　申請依頼が届きました'; // 件名に含まれるキーワード（空の場合は無視）
  const keywordKanri = 'コラボフロー管理部出張申請確認通知'; // 件名に含まれるキーワード（空の場合は無視）
  const senderEmail = 'tripath@collaboflow.com'; // 特定の送信者のメールアドレス（空の場合は無視）
  const numThreadsToProcess = 20; // 処理するスレッド数を指定
  const lastProcessedDateKey = 'LAST_PROCESSED_DATE';
  // const kanribuId = 'kanri@tripath-trial'; // 管理部アカウント(全体通知用ダミーアカウント)
  // const kanribuChannelId = 'fec3b462-0c3f-b275-5c69-b0c4b83cb956'; // 管理部LINEWORKS確認通知用チャンネルID

  // 前回の処理日時を取得
  const properties = PropertiesService.getScriptProperties();
  const lastProcessedDate = properties.getProperty(lastProcessedDateKey);
  const lastProcessedTimestamp = lastProcessedDate
    ? new Date(lastProcessedDate).getTime()
    : 0;

  Logger.log(
    `開始: メールのチェックを開始します。前回の処理日時: ${lastProcessedDate}`
  );

  try {
    const threads = GmailApp.getInboxThreads(0, numThreadsToProcess); // 指定した数のスレッドを取得
    Logger.log(`取得したスレッド数: ${threads.length}`);

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
          const address = message.getTo();
          const subject = message.getSubject();
          const from = message.getFrom();
          const body = message.getPlainBody();

          // 確認通知条件をチェック
          const keywordMatch = !keyword || subject.includes(keyword);
          const senderMatch = !senderEmail || from.includes(senderEmail);

          if (keywordMatch && senderMatch) {
            Logger.log(
              `条件に一致するメールを発見: 件名: ${subject}, 送信者: ${from}, 宛先: ${address}`
            );

            try {
              // bodyをJSONに変換する場合は、以下のようにする
              const bodyJson = JSON.parse(body);
              const env = getEnv_confirm();
              const text =
                `${address} \n\n` +
                `【確認通知】 \n\n` +
                `下記、申請の確認通知が届きました。確認をお願いいたします。\n\n` +
                `申請者: ${bodyJson.who}\n` +
                `申請者部署: ${bodyJson.busho}\n` +
                `文書タイトル: ${bodyJson.title}\n` +
                `文書番号: ${bodyJson.requestno}\n` +
                `申請書URL: ${bodyJson.url}`;
              env.userId = convertLineWorksAccountIdFromEmail(address);
              LINEWORKS.userMessageSend(env, text);
              Logger.log(
                `LINEWORKSのメッセージ送信に成功しました: 件名: ${subject}`
              );
            } catch (e) {
              Logger.log(
                `LINEWORKSのメッセージ送信が失敗しました: 件名: ${subject}, エラー: ${String(e)}`
              );
            }
          }

          // タスク通知条件をチェック
          const keywordMatchTask =
            !keywordTask || subject.includes(keywordTask);
          const senderMatchTask = !senderEmail || from.includes(senderEmail);

          if (keywordMatchTask && senderMatchTask) {
            Logger.log(
              `条件に一致するタスク通知メールを発見: 件名: ${subject}, 送信者: ${from}, 宛先: ${address} \n\n`
            );

            try {
              // bodyの「--以下はシステムで利用します。」以下、「下記のURLをクリックして、依頼内容を確認して下さい。」以上を抽出してJSONに変換する
              const bodyLines = body.split('\n');
              let jsonString = '';
              let isJsonPart = false;
              for (const line of bodyLines) {
                if (line.includes('--以下はシステムで利用します。')) {
                  isJsonPart = true;
                  continue;
                }
                if (
                  line.includes(
                    '下記のURLをクリックして、依頼内容を確認して下さい。'
                  )
                ) {
                  break;
                }
                if (isJsonPart) {
                  jsonString += line + '\n';
                }
              }
              const bodyJson = JSON.parse(jsonString);
              const env = getEnv_selfConfirm();
              const text =
                `${address} \n\n` +
                `【タスク通知】 \n\n` +
                `下記、申請が登録され、タスクが作成されました。タスク一覧を確認し、申請書を提出してください。\n\n` +
                `文書タイトル: ${bodyJson.title}\n` +
                `文書番号: ${bodyJson.requestno}\n` +
                `タスク一覧URL: https://cloud.collaboflow.com/tripath/index.cfm?app_cd=1&fuseaction=clz&folderid=task`;
              env.userId = convertLineWorksAccountIdFromEmail(address);
              LINEWORKS.userMessageSend(env, text);
              Logger.log(
                `LINEWORKSのタスクメッセージ送信に成功しました: 件名: ${subject}`
              );
            } catch (e) {
              Logger.log(
                `LINEWORKSのタスクメッセージ送信が失敗しました: 件名: ${subject}, エラー: ${String(e)}`
              );
            }
          }

          // 確認通知条件をチェック
          const keywordKanriMatch =
            !keywordKanri || subject.includes(keywordKanri);
          const senderKanriMatch = !senderEmail || from.includes(senderEmail);

          if (keywordKanriMatch && senderKanriMatch) {
            Logger.log(
              `条件に一致するメールを発見: 件名: ${subject}, 送信者: ${from}, 宛先: ${address}`
            );

            try {
              // bodyをJSONに変換する場合は、以下のようにする
              const bodyJson = JSON.parse(body);
              const env = getEnv_confirm();
              const text =
                `${address} \n\n` +
                `【管理部出張申請確認通知】 \n\n` +
                `下記出張申請の出張報告が完了しました。 出張報告完了確認をお願いいたします。\n\n` +
                `申請者: ${bodyJson.who}\n` +
                `申請者部署: ${bodyJson.busho}\n` +
                `出張申請書文書タイトル: ${bodyJson.title}\n` +
                `出張申請書文書番号: ${bodyJson.requestno}\n` +
                `出張申請書URL: ${bodyJson.url}`;
              env.userId = convertLineWorksAccountIdFromEmail(address);
              LINEWORKS.userMessageSend(env, text);
              Logger.log(
                `LINEWORKSのメッセージ送信に成功しました: 件名: ${subject}`
              );
            } catch (e) {
              Logger.log(
                `LINEWORKSのメッセージ送信が失敗しました: 件名: ${subject}, エラー: ${String(e)}`
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
      `完了: メールのチェックを完了しました。新しい最後の処理日時: ${new Date(newLastProcessedTimestamp).toISOString()}`
    );
  } catch (e) {
    Logger.log(
      `メールの取得中にエラーが発生しました: ${(e as Error).toString()}`
    );
  }
}

// admin+xxxx@bankin-labo.comメールのエイリアスからLINEWORKSのアカウントIDに変換する関数
function convertLineWorksAccountIdFromEmail(email: string) {
  return `${email.split('admin+')[1].split('@bankin-labo.com')[0]}@tripath-trial`;
}
