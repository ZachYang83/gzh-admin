<template>
  <div class="declare-wrap">
    <div class="form-wrap">
      <div class="form-top flex-center">
        <svg-icon
          class="svg-icon"
          icon-class="dianzhui2-left"
          size="5rem"
        ></svg-icon>
        <span class="form-top-title">人才公寓申请</span>
        <svg-icon
          class="svg-icon"
          icon-class="dianzhui2-right"
          size="5rem"
        ></svg-icon>
      </div>
      <div class="form-content">
        <el-form
          :model="formData"
          :rules="formRules"
          label-position="right"
          label-width="auto"
          ref="formRef"
        >
          <span class="content-item">基本信息</span>

          <div class="form-row">
            <el-form-item
              prop="name"
              label="姓名"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.name"
            >
              <el-input v-model="formData.name" placeholder="请输入" />
            </el-form-item>

            <el-form-item
              prop="gender"
              label="性别"
              size="large"
              class="flex-item"
              :error="errorMsg.gender"
            >
              <el-radio-group v-model="formData.gender">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="form-row">
            <el-form-item
              prop="phoneNo"
              label="手机号码"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.phoneNo"
            >
              <el-input
                v-model="formData.phoneNo"
                placeholder="请输入11位手机号码"
                @blur="validatePhone"
              />
            </el-form-item>

            <el-form-item
              prop="email"
              label="邮箱"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.email"
            >
              <el-input v-model="formData.email" placeholder="请输入邮箱地址" @blur="validateEmail" />
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="IDType"
              label="证件类型"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.IDType"
            >
              <el-select
                v-model="formData.IDType"
                placeholder="身份证"
                style="width: 400px"
              >
                <el-option
                  v-for="item in IDTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item
              prop="IDNo"
              label="证件号码"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.IDNo"
            >
              <el-input v-model="formData.IDNo" placeholder="请输入证件号码" />
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="huji"
              label="户籍"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.huji"
            >
              <el-input v-model="formData.huji" placeholder="请输入" />
            </el-form-item>

            <el-form-item
              prop="maritalStatus"
              label="婚姻状况"
              size="large"
              class="flex-item"
              :error="errorMsg.maritalStatus"
            >
              <el-radio-group v-model="formData.maritalStatus">
                <el-radio label="未婚">未婚</el-radio>
                <el-radio label="已婚">已婚</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>

          <span class="content-item">学历信息</span>
          <div class="form-row">
            <el-form-item
              prop="gradSchool"
              label="毕业院校"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.gradSchool"
            >
              <el-input v-model="formData.gradSchool" placeholder="请输入" />
            </el-form-item>

            <el-form-item
              prop="major"
              label="专业"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.major"
            >
              <el-input
                v-model="formData.major"
                placeholder="请输入"
              />
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="education"
              label="学历"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.education"
            >
              <el-select
                v-model="formData.education"
                placeholder="学历"
                style="width: 400px"
              >
                <el-option
                  v-for="item in educationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item
              prop="eduType"
              label="学历类型"
              size="large"
              class="flex-item"
              :error="errorMsg.eduType"
            >
              <el-radio-group v-model="formData.eduType">
                <el-radio label="全日制">全日制</el-radio>
                <el-radio label="非全日制">非全日制</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="gradDate"
              label="毕业时间"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.gradDate"
            >
              <el-date-picker
                v-model="formData.gradDate"
                type="year"
                placeholder="选择年份"
                style="width: 400px"
              />
            </el-form-item>

            <el-form-item
              label="院校特色"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.schoolFeature"
            >
              <el-select
                v-model="formData.schoolFeature"
                placeholder="请输入"
                style="width: 400px"
              >
                <el-option
                  v-for="item in schoolFeatureOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>

          <el-form-item
            prop="eduCert"
            label="学历证书"
            :error="errorMsg.eduCert"
          >
            <el-upload
              action="#"
              :on-change="handleScenePreviewChange"
              :on-remove="handleRemove"
              list-type="picture-card"
              :auto-upload="false"
              v-model:file-list="formData.eduCert"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>

          <div class="form-actions flex-center">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue";

const formRef = ref(null);
const formData = reactive({
  name: "", //姓名
  gender: "", //性别
  phoneNo: "", //手机号码
  email: "", //邮箱
  IDType: "", //证件类型
  IDNo: "", //证件号码
  maritalStatus: "", //婚姻状况
  huji: "", //户籍
  gradSchool: "", //毕业院校
  major: "", //专业
  education: "", //学历
  eduType: "", //学历类型
  gradDate: "", //毕业时间
  schoolFeature: "", //院校特色
  eduCert: [], //院校特色
});

const IDTypeOptions = ref([
  { value: "身份证", label: "身份证" },
  { value: "港澳通行证", label: "港澳通行证" },
  { value: "台湾通行证", label: "台湾通行证" },
  { value: "护照", label: "护照" },
  { value: "其他证件", label: "其他证件" },
]);
const educationOptions = ref([
  { value: "专科", label: "专科" },
  { value: "本科", label: "本科" },
  { value: "硕士", label: "硕士" },
  { value: "博士", label: "博士" },
]);
const schoolFeatureOptions = ref([
  { value: "985", label: "985" },
  { value: "211", label: "211" },
  { value: "双一流", label: "双一流" },
  { value: "教育部直属", label: "教育部直属" },
  { value: "中央部委", label: "中央部委" },
  { value: "强基计划", label: "强基计划" },
  { value: "双高计划", label: "双高计划" },
]);

const formRules = reactive({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: ["blur", "change"] }],
  phoneNo:[
    { required: true, message: "请输入手机号码", trigger: "blur" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入有效的11位手机号码",
      trigger: "blur",
    },
  ],
  email:[
    { required: true, message: "请输入邮箱地址", trigger: "blur" },
    { type: "email", message: "请输入有效的邮箱地址", trigger: "blur" },
  ],
  IDType: [{ required: true, message: "请选择证件类型", trigger: ["blur", "change"] }],
  IDNo: [{ required: true, message: "请输入证件号码", trigger: "blur" }],
  maritalStatus: [{ required: true, message: "请选择婚姻状况", trigger: ["blur", "change"] }],
  huji: [{ required: true, message: "请输入户籍", trigger: "blur" }],
  gradSchool: [{ required: true, message: "请输入毕业院校", trigger: "blur" }],
  major: [{ required: true, message: "请输入专业", trigger: "blur" }],
  education: [{ required: true, message: "请选择学历", trigger: ["blur", "change"] }],
  eduType: [{ required: true, message: "请选择学历类型", trigger: ["blur", "change"] }],
  gradDate: [{ required: true, message: "请选择毕业时间", trigger: ["blur", "change"] }],
  eduCert:[
    {
      required: true,
      message: "请上传学历证书/学籍证明",
      trigger: "change",
      validator: (rule, value, callback) => {
        // 自定义验证：检查图片列表是否有文件
        if (value.length === 0) {
          callback(new Error("请上传学历证书/学籍证明"));
        } else {
          callback(); // 验证通过
        }
      },
    }, 
  ],

});

// 错误信息存储对象
const errorMsg = reactive({
  name: "", //姓名
  gender: "", //性别
  phoneNo: "", //手机号码
  email: "", //邮箱
  IDType: "", //证件类型
  IDNo: "", //证件号码
  maritalStatus: "", //婚姻状况
  huji: "", //户籍
  gradSchool: "", //毕业院校
  major: "", //专业
  education: "", //学历
  eduType: "", //学历类型
  schoolFeature: "", //院校特色
  eduCert: "", //院校特色
});

// 手机号验证
const validatePhone = () => {
  const reg = /^1[3-9]\d{9}$/;
  if (!formData.phoneNo) {
    errorMsg.phoneNo = "请输入联系电话";
  } else if (isNaN(Number(formData.phoneNo))) {
    errorMsg.phoneNo = "请输入有效的数字手机号";
  } else if (!reg.test(formData.phoneNo)) {
    errorMsg.phoneNo = "请输入有效的11位手机号码";
  } else {
    errorMsg.phoneNo = "";
  }
};

// 邮箱验证
const validateEmail = () => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!formData.email) {
    errorMsg.email = "请输入邮箱地址"; // 添加空值提示
  } else if (!reg.test(formData.email)) {
    errorMsg.email = "请输入有效的邮箱地址";
  } else {
    errorMsg.email = "";
  }
};

const handleScenePreviewChange = (file, fileList) => {
  // 更新图片列表（双向绑定后会自动同步到formData.imgList）
  formData.eduCert = fileList;
  // 清除图片相关的错误提示
  errorMsg.eduCert = "";
};

// 处理图片移除
const handleRemove = (file, fileList) => {
  // 更新图片列表
  formData.eduCert = fileList;
  // 如果移除后没有图片了，手动触发错误提示
  if (fileList.length === 0) {
    errorMsg.eduCert = "请上传学历证书/学籍证明";
  }
};

// 整体表单验证
const validateForm = () => {
  // 手动触发所有验证
  validatePhone();
  validateEmail();

  if (!formData.name) errorMsg.name = "请输入姓名";
  else errorMsg.name = "";
  if (!formData.gender) errorMsg.gender = "请选择性别";
  else errorMsg.gender = "";
  if (!formData.IDType) errorMsg.IDType = "请选择证件类型";
  else errorMsg.IDType = "";
  if (!formData.IDNo) errorMsg.IDNo = "请输入证件号码";
  else errorMsg.IDNo = "";
  if (!formData.maritalStatus) errorMsg.maritalStatus = "请选择婚姻状况";
  else errorMsg.maritalStatus = "";
  if (!formData.huji) errorMsg.huji = "请输入户籍";
  else errorMsg.huji = "";
  if (!formData.gradSchool) errorMsg.gradSchool = "请输入毕业院校";
  else errorMsg.gradSchool = "";
  if (!formData.major) errorMsg.major = "请输入专业";
  else errorMsg.major = "";
  if (!formData.education) errorMsg.education = "请选择学历";
  else errorMsg.education = "";
  if (!formData.eduType) errorMsg.eduType = "请选择学历类型";
  else errorMsg.eduType = "";
  if (!formData.gradDate) errorMsg.gradDate = "请选择毕业时间";
  else errorMsg.gradDate = "";
  if (formData.eduCert.length === 0) errorMsg.eduCert = "请上传学历证书/学籍证明";
  else errorMsg.eduCert = "";

  // 检查是否有错误
  return !Object.values(errorMsg).some((msg) => msg);
};

// 提交表单
const submitForm = () => {
  if (!validateForm()) {
    ElMessage.warning("请完善表单信息后提交");
    return;
  }

  const formDataObj = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    formDataObj.append(key, value);
  });
  ElMessage.success("表单提交成功！");
  resetForm();
};

const resetForm = () => {
  formRef.value.resetFields();
  // 清空错误信息
  Object.keys(errorMsg).forEach((key) => {
    errorMsg[key] = "";
  });
};
</script>

<style lang="scss" scoped>
.declare-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
}
.form-wrap {
  width: 1260px;
  height: 100%;

  background: linear-gradient(
    0deg,
    rgba(0, 90, 255, 0.2) 0%,
    rgba(39, 115, 255, 0) 100%
  );

  .form-top {
    width: 100%;
    height: 80px;
    background: url("@/assets/images/declare-top.png") center center / 100% 100%;
    .form-top-title {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      margin: 0 20px;
    }
  }

  .form-content {
    width: 100%;
    height: calc(100% - 80px);
    padding: 10px 30px;
    box-sizing: border-box;
    overflow-y: auto;

    .content-item {
      display: block;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 32.93px;
      background: linear-gradient(180deg, #1b8af2 0%, #ffffff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      padding-left: 16px; /* 为竖线留出空间 */
      position: relative; /* 为伪元素定位 */
      margin-bottom: 10px;
    }

    .content-item::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      width: 6px;
      background: linear-gradient(180deg, #1b8af2 0%, #ffffff 100%);
      border-radius: 3px;
    }
  }
}

.form-item {
  max-width: 800px;
}

.form-row {
  display: flex;
  gap: 100px; /* 两个表单项之间的间距 */
}

.flex-item {
  flex: 1; /* 平均分配宽度 */
}

:deep(.el-form-item__label) {
  font-size: 16px;
  color: #d8f0ff;
}

:deep(.el-checkbox__label) {
  font-size: 16px;
  color: #d8f0ff;
}
:deep(.el-radio__label) {
  font-size: 16px;
  color: #d8f0ff;
}
</style>
