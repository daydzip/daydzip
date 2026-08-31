# daydzip

Eleventy + Decap CMS로 만든 GitHub 기반 블로그.

## 로컬 개발

```bash
npm install
npm start
```

`http://localhost:8080` 에서 확인, `http://localhost:8080/admin/` 은 배포된 사이트에서만 로그인이 동작합니다(Netlify Identity 필요).

## 배포 (Netlify)

1. [Netlify](https://app.netlify.com) 에 GitHub 계정으로 로그인
2. "Add new site" → "Import an existing project" → GitHub에서 `daydzip/daydzip` 저장소 선택
3. 빌드 설정은 `netlify.toml`에 이미 정의되어 있어 자동 인식됨 (build: `npm run build`, publish: `_site`)
4. 배포 완료 후 Netlify 대시보드에서 **Site configuration → Identity → Enable Identity**
5. Identity 설정에서 **Registration: Invite only** 로 변경 (아무나 가입하지 못하게)
6. **Services → Git Gateway → Enable Git Gateway** 클릭
7. **Identity → Invite users** 에서 본인 이메일로 초대 → 메일의 초대 링크로 비밀번호 설정
8. 이후 `https://<사이트주소>/admin/` 접속 → 로그인하면 글 작성/수정 가능

## 새 글 작성

- 관리자 화면(`/admin/`)에서 작성하거나
- `src/posts/` 폴더에 직접 `.md` 파일 추가 (frontmatter는 `src/posts/hello-world.md` 참고)
