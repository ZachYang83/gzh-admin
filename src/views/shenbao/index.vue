<template>
  <div class="declare-wrap">
    <div class="form-wrap">
      <div class="form-top flex-center">
        <svg-icon
          class="svg-icon"
          icon-class="dianzhui2-left"
          size="5rem"
        ></svg-icon>
        <span class="form-top-title">发布场景</span>
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
          <span class="content-item">场景信息</span>
          <el-form-item
            label="场景名称"
            prop="sceneName"
            label-width="auto"
            class="form-item"
            size="large"
            :error="errorMsg.sceneName"
          >
            <el-input
              placeholder="请输入场景名称"
              v-model="formData.sceneName"
            />
          </el-form-item>
          <el-form-item
            label="场景类型"
            prop="sceneType"
            size="large"
            class="form-item"
            :error="errorMsg.sceneType"
          >
            <el-checkbox-group v-model="formData.sceneType">
              <el-checkbox value="智能制造" label="智能制造"
                >智能制造</el-checkbox
              >
              <el-checkbox value="医疗健康" label="医疗健康"
                >医疗健康</el-checkbox
              >
              <el-checkbox value="综合交通" label="综合交通"
                >综合交通</el-checkbox
              >
              <el-checkbox value="能源环保" label="能源环保"
                >能源环保</el-checkbox
              >
              <el-checkbox value="城市治理" label="城市治理"
                >城市治理</el-checkbox
              >
              <el-checkbox value="教育教学" label="教育教学"
                >教育教学</el-checkbox
              >
              <el-checkbox value="政务服务" label="政务服务"
                >政务服务</el-checkbox
              >
              <el-checkbox value="商贸流通" label="商贸流通"
                >商贸流通</el-checkbox
              >
              <el-checkbox value="数字创意" label="数字创意"
                >数字创意</el-checkbox
              >
              <el-checkbox value="智能办公" label="智能办公"
                >智能办公</el-checkbox
              >
              <el-checkbox value="智能安防" label="智能安防"
                >智能安防</el-checkbox
              >
              <el-checkbox value="现代农业" label="现代农业"
                >现代农业</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>
          <el-form-item
            prop="description"
            label="需求描述"
            label-width="auto"
            class="form-item"
            size="large"
            :error="errorMsg.description"
          >
            <el-input
              type="textarea"
              v-model="formData.description"
              placeholder="围绕拟建设的具体应用场景，请逐条简述建设需求，包括但不限于建没总体目标、建设内容、建设期限、预期成效等"
              rows="3"
            />
          </el-form-item>
          <el-form-item
            prop="foundation"
            label="建设基础"
            label-width="auto"
            class="form-item"
            size="large"
          >
            <el-input
              type="textarea"
              v-model="formData.foundation"
              placeholder="请简要阐述本单位在人工智能应用场景建设方面已有的基础，包括但不限于数据、算力等"
              rows="3"
            />
          </el-form-item>
          <el-form-item
            prop="imgList"
            label="场景封面"
            :error="errorMsg.imgList"
          >
            <el-upload
              action="#"
              :on-change="handleScenePreviewChange"
              :on-remove="handleRemove"
              list-type="picture-card"
              :auto-upload="false"
              v-model:file-list="formData.imgList"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>

          <span class="content-item">联系人信息</span>
          <div class="form-row">
            <el-form-item
              prop="contactName"
              label="姓名"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.contactName"
            >
              <el-input
                v-model="formData.contactName"
                placeholder="请输入姓名"
              />
            </el-form-item>

            <el-form-item
              prop="contactPosition"
              label="职务/职称"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.contactPosition"
            >
              <el-input
                v-model="formData.contactPosition"
                placeholder="请输入职务/职称"
              />
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="contactPhone"
              label="电话"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.contactPhone"
            >
              <el-input
                v-model="formData.contactPhone"
                placeholder="请输入11位手机号码"
                @blur="validatePhone"
              />
            </el-form-item>

            <el-form-item label="是否公开" size="large" class="flex-item">
              <el-radio-group v-model="formData.isPhonePublic">
                <el-radio label="是">是</el-radio>
                <el-radio label="否">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>

          <div class="form-row">
            <el-form-item
              prop="contactEmail"
              label="邮箱"
              class="flex-item"
              style="max-width: 400px"
              size="large"
              :error="errorMsg.contactEmail"
            >
              <el-input
                v-model="formData.contactEmail"
                placeholder="请输入邮箱地址"
                @blur="validateEmail"
              />
            </el-form-item>

            <el-form-item label="是否公开" size="large" class="flex-item">
              <el-radio-group v-model="formData.isEmailPublic">
                <el-radio label="是">是</el-radio>
                <el-radio label="否">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>

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
  sceneName: "",
  sceneType: [],
  description: "",
  foundation: "",
  imgList: [],
  contactName: "",
  contactPosition: "",
  contactPhone: "",
  isPhonePublic: "是",
  contactEmail: "",
  isEmailPublic: "是",
});

const formRules = reactive({
  sceneName: [{ required: true, message: "请输入场景名称", trigger: "blur" }],
  sceneType: [{ required: true, message: "请选择场景类型", trigger: "change" }],
  description: [{ required: true, message: "请输入需求描述", trigger: "blur" }],
  imgList: [
    {
      required: true,
      message: "请上传场景封面",
      trigger: "change",
      validator: (rule, value, callback) => {
        // 自定义验证：检查图片列表是否有文件
        if (value.length === 0) {
          callback(new Error("请上传场景封面"));
        } else {
          callback(); // 验证通过
        }
      },
    }, // 这里trigger改为change更合适，因为是上传文件操作
  ],
  contactName: [
    { required: true, message: "请输入联系人姓名", trigger: "blur" }, // 一般输入框用blur触发更合适
  ],
  contactPosition: [
    { required: true, message: "请输入职务/职称", trigger: "blur" }, // 一般输入框用blur触发更合适
  ],
  contactPhone: [
    { required: true, message: "请输入联系电话", trigger: "blur" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入有效的11位手机号码",
      trigger: "blur",
    },
  ],
  contactEmail: [
    { required: true, message: "请输入邮箱地址", trigger: "blur" },
    { type: "email", message: "请输入有效的邮箱地址", trigger: "blur" },
  ],
});

// 错误信息存储对象
const errorMsg = reactive({
  sceneName: "",
  sceneType: "",
  description: "",
  imgList: "",
  contactName: "",
  contactPosition: "",
  contactPhone: "",
  contactEmail: "",
});

// 处理图片上传（选择文件后）
const handleScenePreviewChange = (file, fileList) => {
  // 更新图片列表（双向绑定后会自动同步到formData.imgList）
  formData.imgList = fileList;
  // 清除图片相关的错误提示
  errorMsg.imgList = "";
};

// 处理图片移除
const handleRemove = (file, fileList) => {
  // 更新图片列表
  formData.imgList = fileList;
  // 如果移除后没有图片了，手动触发错误提示
  if (fileList.length === 0) {
    errorMsg.imgList = "请上传场景封面";
  }
};

// 手机号验证
const validatePhone = () => {
  const reg = /^1[3-9]\d{9}$/;
  if (!formData.contactPhone) {
    errorMsg.contactPhone = "请输入联系电话";
  } else if (isNaN(Number(formData.contactPhone))) {
    errorMsg.contactPhone = "请输入有效的数字手机号";
  } else if (!reg.test(formData.contactPhone)) {
    errorMsg.contactPhone = "请输入有效的11位手机号码";
  } else {
    errorMsg.contactPhone = "";
  }
};

// 邮箱验证
const validateEmail = () => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!formData.contactEmail) {
    errorMsg.contactEmail = "请输入邮箱地址"; // 添加空值提示
  } else if (!reg.test(formData.contactEmail)) {
    errorMsg.contactEmail = "请输入有效的邮箱地址";
  } else {
    errorMsg.contactEmail = "";
  }
};

// 整体表单验证
const validateForm = () => {
  // 手动触发所有验证
  validatePhone();
  validateEmail();

  if (!formData.contactName) errorMsg.contactName = "请输入联系人姓名";
  else errorMsg.contactName = "";

  if (!formData.contactPosition)
    errorMsg.contactPosition = "请输入联系人职务/职称";
  else errorMsg.contactPosition = "";

  if (formData.sceneName == "") errorMsg.sceneName = "请输入场景名称";
  else errorMsg.sceneName = "";

  if (formData.sceneType.length == 0) errorMsg.sceneType = "请输入场景所属领域";
  else errorMsg.sceneType = "";

  if (formData.description == "") errorMsg.description = "请描述场景需求";
  else errorMsg.description = "";

  if (formData.imgList.length === 0) {
    errorMsg.imgList = "请上传场景封面";
  } else {
    errorMsg.imgList = "";
  }

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
  gap: 20px; /* 两个表单项之间的间距 */
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
