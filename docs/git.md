# Git

## Lấy địa chỉ git remote

```shell
git remote get-url origin
```

## Lỡ đẩy conflict lên thì sao?

Giả sử có danh sách commit như sau với D là commit bị conflict, tất cả đều đã đẩy lên git remote. Tôi muốn khôi phục về commit C thì phải làm như thế nào?
```
A -> B -> C -> D
```

Hãy sử dụng git reset.  
Đầu tiên, reset hard về commit C:  
```
git reset --hard <commit hash của C>
```

Sau đó chạy reset soft về D:  
```
git reset --soft <commit hash của D>
```

Add và commit mọi thứ:  
```
git add -A
git commit -m 'Commit message'
git push
```

## Pull mà không merge

Bạn commit code ở local, sau đó muốn push lên. Nhưng bạn ở dưới HEAD của git remote.  
Lúc này bạn cần chạy git pull để kéo code từ git remote về, sau đó gộp với git local của bạn.  
Nếu muốn pull mà không merge, hãy chạy:
```
git pull --rebase
```

Nếu có conflict, hãy chạy
```
git rebase --abort
```

Sau đó chạy `git pull` và tiến hành xử lý conflict.  